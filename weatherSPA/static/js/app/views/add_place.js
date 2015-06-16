define([
    'jquery',
    'underscore',
    'backbone',
    'app/views/modal'
], function ($, _, Backbone, ModalView) {
    'use strict';

    var AddPlaceView = ModalView.extend({

        html: [
            '<form role="form">',
                '<div class="form-group">',
                    '<label for="countryCodeInput">State Code <span id="label">(ex: FL, CA, TX)</span></label>',
                    '<input type="text" class="form-control" id="countryCodeInput" placeholder="Enter state code">',
                '</div>',
                '<div class="form-group">',
                    '<label for="nameInput">City Name <span id="label">(ex: Tampa or Boston)</span></label>',
                    '<input type="text" class="form-control" id="nameInput" placeholder="Enter the city name">',
                '</div>',
                '<div id="btn-add" class="btn btn-default">Submit</div>',
            '</form>'
        ].join(''),

        events: {
            'click #btn-add': 'addNewPlace'
        },

        initialize: function() {
            ModalView.prototype.initialize.apply(this, arguments);
            this.$bodyEl.html(this.html);
        },

        addNewPlace: function(e) {
            var place = {
                countryCode: this.$('#countryCodeInput').val(),
                name: this.$('#nameInput').val()
            };

            this.collection.create(place);
            this.$modalEl.modal('hide');
        }

    });

    return AddPlaceView;
});