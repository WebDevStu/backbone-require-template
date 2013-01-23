// main app

define([
    'jquery',
    'underscore',
    'backbone',
    'router'
], function ($, _, Backbone, Router) {
    var initialize = function () {
        //  instantly call router
        Router.initialize();
    };
    return {
        initialize: initialize
    };
});