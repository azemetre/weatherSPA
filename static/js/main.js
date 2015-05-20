require.config({

    paths: {
        'jquery': 'libs/jquery-1.11.2.min',
        'underscore': 'libs/underscore-1.8.3.min',
        'backbone': 'libs/backbone-1.2.0.min',
        'bootstrap': 'libs/bootstrap'
    },

    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        'bootstrap': {
            deps: [
                'jquery'
            ]
        }
    }
});

require([
    'backbone',
    'app/app',
    'bootstrap'
], function (Backbone, App, bootstrap) {
    'use strict';

    App.initialize();
    console.log(App);

});