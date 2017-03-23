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
        }
      });

      $scope.select = function () {
        leafletData.getMap().then(function (map) {
          console.log(map);
          var url = "ca_borne.kml";
          console.log(url);
          $scope.rectLayer = omnivore.kml(url).on('ready', function () {

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

        leafletData.getMap().then(function (map) {
          console.log(map);
          var url = "tr_piste_cyclable.kml";
          console.log(url);
          $scope.rectLayer = omnivore.kml(url).on('ready', function () {

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

