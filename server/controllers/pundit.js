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
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    return Pundit
      .all({
        attributes: ['STUDENT_ID', 'PNAME', 'FULLNAME'],
        order: [
          ['FULLNAME', 'ASC']
        ]
      })
      .then(pundit => res.status(200).send(pundit))
      .catch(error => res.status(400).send(error));
  },

  page(req, res) {
    let limit = 20;   // number of records per page
    let offset = 0;
    Pundit.findAndCountAll()
      .then((data) => {
        let page = req.params.page;      // page number
        let pages = Math.ceil(data.count / limit);
        offset = limit * (page - 1);
        Pundit.findAll({
          attributes: ['STUDENT_ID', 'PNAME', 'FULLNAME'],
          limit: limit,
          offset: offset,
          $sort: { STUDENT_ID: 1 }
        })
          .then((users) => {
            res.status(200).json({ 'result': users, 'count': data.count, 'pages': pages });
          });
      })
      .catch(function (error) {
        res.status(500).send('Internal Server Error');
      });
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
      where: {
        $or: [
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
        ]
      }
    })
      .then(pundit => res.status(200).json(pundit))
      .catch(err => res.status(400).send(err));
  },

};