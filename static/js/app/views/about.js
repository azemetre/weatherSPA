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
            var html = '<h3>About page</h3>';
            this.$el.html(html);
            return this;
        }

    });

    return AboutView;
});