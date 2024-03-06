const songRouter = require('./song');
const categoryRouter = require('./category');

function route(app) {
    app.use('/song', songRouter);
    app.use('/cat', categoryRouter);
}

module.exports = route;
