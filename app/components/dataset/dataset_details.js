/**
 * Created by Coline on 22/03/2017.
 */

'use strict';


angular.module('frontProjectApp')
  .controller('DatasetDetailsCtrl', function ($scope, GlobalService, Request, $routeParams) {

    var id = $routeParams.id;

    Request.get(GlobalService.searchElement + "?limit=1&tag=parking")
      .then(function (data) {
        console.log(data.data[0]);
        $scope.dataset = data.data[0];
      }, function (error) {
        console.log(error);
      });

    Request.get(GlobalService.getInfoJeuData + "?url="+id)
      .then(function(data) {
        console.log(data.data);
        $scope.dataset.data = data.data;
        $scope.dataset.header = Object.keys(data.data[0]);
      }, function(error) {
        console.log(error);
      });


  });
