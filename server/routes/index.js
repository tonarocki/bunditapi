const punditController = require('../controllers').pundit;
var mcache = require('memory-cache');
module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcom to api bundit',
    }));


    var cache = (duration) => {
        return (req, res, next) => {
            let key = '__express__' + req.originalUrl || req.url
            let cachedBody = mcache.get(key)
            if (cachedBody) {
                res.send(cachedBody)
                return
            } else {
                res.sendResponse = res.send
                res.send = (body) => {
                    mcache.put(key, body, duration * 1000);
                    res.sendResponse(body)
                }
                next()
            }
        }
    }


    app.post('/api/bundit', punditController.create);
    app.get('/api/bundit', cache(30), punditController.list);
    app.get('/api/bundit/:stdid', punditController.liststdid);
    app.get('/api/bundit/page/:page',cache(30), punditController.page);
    app.get('/api/find/:stdid', punditController.listfind);



};