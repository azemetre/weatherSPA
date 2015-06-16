define([
    'backbone',
    'backbone.localStorage'
], function (Backbone) {
    'use strict';

    var AppModel = Backbone.Model.extend({
        localStorage: new Backbone.LocalStorage("AppSettings"),
        defaults: {
            'backgroundColor': '#E53935',
            'celsius': true,
            'welcomeMessage': 'Welcome to Weather Peeks'
        }
    });

    return AppModel;
});