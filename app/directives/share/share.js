angular.module('frontProjectApp').directive('share', function () {
  return {
    controllerAs: 'share',
    scope : {
      light: "="
    },
    controller: function($scope){
      $scope.url = document.URL;
    },
    templateUrl: 'directives/share/share.html'
  }
});
