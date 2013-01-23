// main bootstrap file

//  set up dependancies
require.config({
    paths: {
        jquery: 'librarys/jquery/jquery',
        cookies: 'librarys/jquery/jquery.cookies',
        zepto: 'librarys/zepto/zepto',
        underscore: 'librarys/underscore/underscore',
        backbone: 'librarys/backbone/backbone',
        templates: '../templates',
        text: 'librarys/require/text',
        handlebars: 'librarys/handlebars/handlebars'
    }
});

//  load the app and initialize
require(['app'], function (App) {
    App.initialize();
});