var WebsiteScheme = require('../models/website').Website;

module.exports = {
	create: async function (ctx, next) {
		await WebsiteScheme.create({name: "Home", content: "Home page content", active: true});
		ctx.body = await "Home page saved successfully!";
		next()
	},

	getHome: async function(ctx, next) {
		ctx.body = await WebsiteScheme.findOne({name: "Home"});
		next();
	},

	getPage: async function(ctx, next) {
		ctx.body = await WebsiteScheme.findOne({name: "Home"});
		next();
	},

	getAll: async function(ctx, next) {
		ctx.body = await WebsiteScheme.find({});
	}
};