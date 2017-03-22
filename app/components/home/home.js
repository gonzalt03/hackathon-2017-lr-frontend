'use strict';

/**
 * @ngdoc function
 * @name frontProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontProjectApp
 */
angular.module('frontProjectApp')
  .controller('HomeCtrl', function ($scope) {

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


    $scope.timePicture = function (time) {
      var ti = parseFloat(200*time);
      return "-webkit-animation-delay: "+ti+"ms;animation-delay: "+ti+"ms;";
    };

  });
