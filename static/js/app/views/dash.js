define([
    'jquery',
    'underscore',
    'backbone',
], function ($, _, BackBone) {

    'use strict';

    var DashView = BackBone.View.extend({

        initialize: function() {

        },

        render: function() {
            var html = '<h3>Dashboard page</h3>';
            this.$el.html(html);
            return this;
        }

    });

    return DashView;
});