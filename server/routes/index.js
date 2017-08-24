module.exports = function(app) {
	var Router 		= require('koa-router'), 
			webController 	= require('../controllers/website');
			userController 	= require('../controllers/user'),
			router = new Router();

	// Website APIs
	router.get('/', webController.getHome);
	router.post('/website/create', webController.create);
	router.get('/website/getpage', webController.getPage);
	router.get('/website/all', webController.getAll);


	app
  .use(router.routes())
  .use(router.allowedMethods());
};