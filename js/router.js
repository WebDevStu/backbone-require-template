// set up backbone routes
define([
    'jquery',
    'underscore',
    'backbone',
    'views/view-name'
], function ($, _, Backbone, ViewConstructor) {
    var AppRouter = Backbone.Router.extend({
            routes: {
                'test': 'aFunction',
                // Default
                '*actions': 'defaultAction'
            }
        }),
        initialize = function () {
            var app_router = new AppRouter();
            app_router.on('route:aFunction', function () {
                var view = new ViewConstructor();
                view.render();
            });
            app_router.on('route:defaultAction', function (actions) {
                console.log('No route:', actions);
            });
            Backbone.history.start();
        };
    return {
        initialize: initialize
    };
});