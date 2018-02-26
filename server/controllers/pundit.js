const Pundit = require('../models').pundit;

module.exports = {

  create(req, res) {
    return Pundit
      .create({
        YR_RESIVE: req.body.YR_RESIVE,
      })
      .then(pundit => res.status(201).send(pundit))
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return Pundit
      .all()
      .then(pundit => res.status(200).send(pundit))
      .catch(error => res.status(400).send(error));
  },


  liststdid(req, res) {
    return Pundit.findAll({
      where: { STUDENT_ID: req.params.stdid }
    })
      .then(pundit => res.status(200).json(pundit))
      .catch(err => res.status(400).send(err));
  },

  listfind(req, res) {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    return Pundit.findAll({
      where: {  $or: [
        {
          STUDENT_ID: {
            $like: req.params.stdid + '%'
          }
        },
        {
          FULLNAME: {
            $like: req.params.stdid + '%'
          }
        }
      ] }
    })
      .then(pundit => res.status(200).json(pundit))
      .catch(err => res.status(400).send(err));
  },

};