module.exports = {
	index: async function index(ctx, next) {
		ctx.body = await "API Response";
	}
};