/**
 * Created by Coline on 22/03/2017.
 */

'use strict';


angular.module('frontProjectApp')
  .controller('SearchCtrl', function ($scope, $routeParams, $location, GlobalService, Request, leafletData) {

    $scope.query = $routeParams.query;

    Request.get(GlobalService.searchElement + "?limit=-1&tag=" + $scope.query)
      .then(function (data) {
        console.log(data.data);
        $scope.results = data.data;
      }, function (error) {
        console.log(error);
      });

    $scope.clickOnCard = function (aCard) {
      $scope.identifierSelected = aCard.identifier;
      Request.get(GlobalService.getMetaData + "?id=" + aCard.identifier)
        .then(function (data) {
          console.log(data.data[0]);
          $scope.datasetMeta = data.data[0];
        }, function (error) {
          console.log(error);
        });
    };

    $scope.goDataset = function (id) {
      $location.path('/dataset/' + id);
    };

    function coordToGPS(coordLamb93) {
      // need proj4
      var projection = '+proj=lcc +lat_1=49 +lat_2=44 +lat_0=46.5 +lon_0=3 +x_0=700000 +y_0=6600000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs';
      var pointTemp = proj4(projection).inverse(coordLamb93);
      var coordGPS = [];
      coordGPS[0] = pointTemp[1];
      coordGPS[1] = pointTemp[0];
      return coordGPS;
    };
    $scope.select = function () {
      var markers = [];

      Request.get('http://localhost:3000/api-get-data?url=disponibilite_parking')
        .then(function (dataset) {
          for (var props in dataset.data) {
            var GPS = coordToGPS([dataset.data[props].dp_x, dataset.data[props].dp_y])
            markers.push(
              {
                lat: GPS[0],
                lng: GPS[1],
                icon: {
                  type: 'awesomeMarker',
                  prefix: 'fa',
                  icon: 'ravelry',
                  markerColor: 'green'
                },
                message:dataset.data[props].dp_place_disponible+" places disponibles au parking "+ dataset.data[props].dp_libelle
              });
          }
        })
      angular.extend($scope, {
        defaults: {
          scrollWheelZoom: false
        },
        la_rochelle: {
          lat: 46.15,
          lng: -1.15,
          zoom: 13
        },
        markers: markers
      });
    };


    $scope.select();

  });
