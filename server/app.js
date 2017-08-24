var koa = require('koa'),
    path = require('path'),
    views = require('koa-views'),
    config = require('config'),
    cors = require("kcors"),
    serve = require('koa-static');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/' + config.database.name);

var app = new koa();
app.use(cors());

// initialize render helper
app.use(views('/Users/amrendra/work/tayh-app/dist', config.template.options));

require('./routes')(app);
app.listen(3000);