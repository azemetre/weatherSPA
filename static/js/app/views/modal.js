define([
    'jquery',
    'underscore',
    'backbone',
    'app/templates',
    'bootstrap'
], function ($, _, Backbone, Templates, Bootstrap) {
    'use strict';

    var ModaelView = Backbone.View.extend({

        template: Templates['modal'],

        events: {

        },

        id: 'modal-view',

        initialize: function() {

        },

        render: function() {

            return this;
        },

        show: function() {

        },

        onModalHidden: function(e) {

        }
        
    });
});