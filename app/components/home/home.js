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
      {title : "Mon titre 1"},
      {title : "Mon titre 2"},
      {title : "Mon titre 3"}
    ];

    $scope.cardDownloaded = [
      {title : "Mon titre 1"},
      {title : "Mon titre 2"},
      {title : "Mon titre 3"}
    ];

  });
