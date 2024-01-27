const { userRoute, authRoute, blogRoute, commentRoute } = require('./routes.index');

exports.assignRoutes = app => {
	userRoute.assignRoutes(app);
	authRoute.assignRoutes(app);
	blogRoute.assignRoutes(app);
	commentRoute.assignRoutes(app);
};
