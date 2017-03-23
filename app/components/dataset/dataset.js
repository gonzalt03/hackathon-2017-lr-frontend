/**
 * Created by Coline on 22/03/2017.
 */

'use strict';


angular.module('frontProjectApp')
  .controller('DatasetCtrl', function ($scope, Request, GlobalService) {

    Request.get(GlobalService.getAll)
      .then(function (data) {
        console.log(data.data);
        $scope.datasets = data.data;
      }, function (error) {
        console.log(error);
      });

    $scope.timePicture = function (time) {
      var ti = parseFloat(200 * time);
      return "-webkit-animation-delay: " + ti + "ms;animation-delay: " + ti + "ms;";
    };

  });
