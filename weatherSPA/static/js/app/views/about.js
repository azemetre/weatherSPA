define([
    'jquery',
    'underscore',
    'backbone',
], function ($, _, BackBone) {

    'use strict';

    var AboutView = BackBone.View.extend({

        initialize: function() {

        },

        render: function() {
            var html = '<h3>About page</h3><p id="about-p">The tools used to create this project were <a href="http://www.sublimetext.com/">Sublime Text 3</a>, <a href="http://requirejs.org/">RequireJS</a>, <a href="http://backbonejs.org/">Backbone.js</a>, <a href="http://underscorejs.org/">Underscore</a>, <a href="https://jquery.com/">jQuery</a>, <a href="https://github.com/jeromegn/Backbone.localStorage">Backbone.localStorage</a>, <a href="http://getbootstrap.com/">Bootstrap 3</a>, and the <a href="http://www.wunderground.com/weather/api/">Wunderground API</a>.</p>';
            this.$el.html(html);
            return this;
        }

    });

    return AboutView;
});