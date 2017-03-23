/**
 * Created by Coline on 22/03/2017.
 */

'use strict';


angular.module('frontProjectApp')
  .controller('SearchCtrl', function ($scope, $routeParams, $location, GlobalService, Request) {

    $scope.query = $routeParams.query;

    Request.get(GlobalService.searchElement + "?limit=-1&tag="+$scope.query)
      .then(function(data) {
        console.log(data.data);
        $scope.results = data.data;
      }, function(error) {
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
    }

  });
