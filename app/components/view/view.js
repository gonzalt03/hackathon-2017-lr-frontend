/**
 * Created by Coline on 22/03/2017.
 */

'use strict';

angular.module('frontProjectApp')
  .controller('ViewCtrl', function ($scope) {
    angular.extend($scope, {
      defaults: {
        scrollWheelZoom: false
      },
      chicago: {
        lat: 41.85,
        lng: -87.65,
        zoom: 8
      },
      markers: {
        m1: {
          lat: 41.85,
          lng: -87.65,
          message: "I'm a static marker with defaultIcon",
          focus: false,
          icon: L.AwesomeMarkers.icon({
            icon: 'coffee',
            markerColor: 'red'
          })
        }
      }
    });

    var redMarker = L.AwesomeMarkers.icon({
      icon: 'coffee',
      markerColor: 'red'
    });

  });

