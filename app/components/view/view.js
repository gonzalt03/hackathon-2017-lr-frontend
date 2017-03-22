/**
 * Created by Coline on 22/03/2017.
 */

'use strict';

angular.module('frontProjectApp')
  .controller('ViewCtrl', function ($scope, leafletData) {
      angular.extend($scope, {
        defaults: {
          scrollWheelZoom: false
        },
        la_rochelle: {
          lat: 46.15,
          lng: -1.15,
          zoom: 14
        },
        markers: {
          m1: {
            lat: 46.15,
            lng: -1.15,
            message: "I'm a black one",
            focus: false,
            icon: {
              prefix: 'fa',
              type: 'awesomeMarker',
              icon: 'fa-cutlery',
              markerColor: 'black'
            }
          },
          m2: {
            lat: 46.145,
            lng: -1.12,
            message: "I'm a green marker",
            focus: false,
            icon: {
              prefix: 'fa',
              type: 'awesomeMarker',
              icon: 'fa-graduation-cap',
              markerColor: 'green'
            }
          }
        }
      });

      $scope.select = function () {
        leafletData.getMap().then(function (map) {
          console.log(map)
          if ($scope.worldLayer) {
            map.removeLayer($scope.worldLayer);
          }
          var url = "ca_borne.kml";
          console.log(url);
          $scope.rectLayer = omnivore.kml(url).on('ready', function (layer) {

            this.eachLayer(function (marker) {
                marker.setIcon(L.AwesomeMarkers.icon({
                  prefix: 'fa',
                  icon: 'car',
                  markerColor: 'blue'
                }))
              }
            );
          })
            .addTo(map);
          console.log($scope.rectLayer)
        });
      };

      $scope.select();
    }
  );

