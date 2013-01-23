/* 
 * main view file
 */

define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'text!templates/template-name.html'
], function($, _, Backbone, Handlebars, templateView) {
    var ViewConstructor = Backbone.View.extend({
        el: $('#page'),
        render: function() {
            // generate data and pass into handlebar template
            var data = {
                    test: 'Yeeharrrr!'
                },
                template = Handlebars.compile(templateView);
            this.$el.append(template(data));
        }
    });
    return ViewConstructor;
});