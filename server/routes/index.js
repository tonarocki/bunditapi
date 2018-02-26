const punditController = require('../controllers').pundit;

module.exports = (app) => {
    app.get('/api', (req,res) => res.status(200).send({
        message: 'Welcom to api bundit',
    }));

    app.post('/api/bundit', punditController.create);
    app.get('/api/bundit', punditController.list);
    app.get('/api/bundit/:stdid', punditController.liststdid)
    app.get('/api/find/:stdid', punditController.listfind)
   
};