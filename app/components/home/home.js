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

            // Ajout parking
            if (request == 'p' || request == 'pa' || request == 'par' || request == 'park' || request == 'parki' || request == 'parkin' || request == 'parking') {
              $scope.resultsRequest.unshift({
                type: "formule",
                description: "Parking Encan reste 335 places"
              })
            }
          }, function (error) {
            console.log(error);
          });
      }
    };

    $scope.cardShowed = [
      {
        title: "Statistiques sur la disponibilité des parkings par heures",
        frequence: "Quotidienne",
        location: "La Rochelle",
        url: "/dataset/disponibilite_parking_heure"
      },
      {
        title: "Statistiques sur la disponibilité des parkings par jour",
        frequence: "Quotidienne",
        location: "La Rochelle",
        url: "/dataset/disponibilite_parking_jour"
      },
      {
        title: "Le schéma de cohérence territoriale, document d'urbanisme",
        frequence: "Unique",
        location: "Territoire",
        url: "/dataset/limite_scot"
      }
    ];

    $scope.cardDownloaded = [
      {
        title: "Statistiques sur la disponibilité des parkings par jour",
        frequence: "Quotidienne",
        location: "La Rochelle",
        url: "/dataset/disponibilite_parking_jour"
      },
      {
        title: "Statistiques sur la disponibilité des parkings par heures",
        frequence: "Quotidienne",
        location: "La Rochelle",
        url: "/dataset/disponibilite_parking_heure"
      },
      {
        title: "Le schéma de cohérence territoriale, document d'urbanisme",
        frequence: "Unique",
        location: "Territoire",
        url: "/dataset/limite_scot"
      }
    ];


    $scope.search = function (query) {
      $location.path('/search/' + query);
    };

    $scope.goDataset = function (element) {
      $location.path('/dataset/' + element.identifier);
    };

    $scope.goDatasetUrl = function (url) {
      $location.path(url);
    };

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
