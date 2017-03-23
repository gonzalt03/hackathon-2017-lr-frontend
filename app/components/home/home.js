'use strict';

/**
 * @ngdoc function
 * @name frontProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontProjectApp
 */
angular.module('frontProjectApp')
  .controller('HomeCtrl', function ($scope, $location, GlobalService, Request) {

    $scope.resultsRequest = [];

    $scope.refreshRequest = function (request) {
      if (request.length > 2) {
        Request.get(GlobalService.searchElement + "?limit=6&tag=" + request)
          .then(function (data) {
            console.log(data.data);
            $scope.resultsRequest = data.data;
          }, function (error) {
            console.log(error);
          });
      }
    };

    $scope.cardShowed = [
      {
        title: "SIGNALISATION LUMINEUSE – SUPPORT",
        frequence: "Quotidienne",
        location: "La Rochelle"
      },
      {
        title: "SIGNALISATION LUMINEUSE – SUPPORT",
        frequence: "Quotidienne",
        location: "La Rochelle"
      },
      {
        title: "SIGNALISATION LUMINEUSE – SUPPORT",
        frequence: "Quotidienne",
        location: "La Rochelle"
      }
    ];

    $scope.cardDownloaded = [
      {
        title: "SIGNALISATION LUMINEUSE – SUPPORT",
        frequence: "Quotidienne",
        location: "La Rochelle"
      },
      {
        title: "SIGNALISATION LUMINEUSE",
        frequence: "Quotidienne",
        location: "La Rochelle"
      },
      {
        title: "SIGNALISATION THOMAS – SUPPORT",
        frequence: "Quotidienne",
        location: "La Rochelle"
      }
    ];

    /**$scope.resultsRequest = [
     {
       id: 1,
       name: "SIGNALISATION LUMINEUSE – SUPPORT",
       type: "dataset"
     },
     {
       id: 2,
       name: "STATIONNEMENT – PLACE EN ZONE BLEUE",
       type: "dataset"
     },
     {
       id: 3,
       name: "STATIONNEMENT – PLACES DISPONIBLES EN TEMPS RÉEL",
       type: "dataset"
     },
     {
       id: 4,
       name: "Parking Grande horloge, reste 15 places",
       type: "formule"
     }
     ];*/

    $scope.search = function (query) {
      $location.path('/search/' + query);
    };

    $scope.goDataset = function (element) {
      $location.path('/dataset/' + element.identifier);
    }

    $scope.iconDataType = function (data) {
      switch (data.type) {
        case "dataset":
          return 'fa-table';
        case "formule":
          return 'fa-info-circle';
        default:
          return 'fa-table';
      }
    };

    $scope.timePicture = function (time) {
      var ti = parseFloat(200 * time);
      return "-webkit-animation-delay: " + ti + "ms;animation-delay: " + ti + "ms;";
    };


  });
