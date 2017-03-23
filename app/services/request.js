angular.module('frontProjectApp')
  .factory('Request', ['$http', function ($http) {

    var request = {};

    request.post = function (url, json) {
      return $http({
        method: 'POST',
        url: url,
        data: json
      })
    };

    request.get = function (url) {
      console.log("Get function");
      console.log(url);
      var result =  $http({
        method: 'GET',
        url: url
      });
      return result;
    };

    request.put = function (url, json) {
      return $http({
        method: 'PUT',
        url: url,
        data: json
      })
    };

    request.delete = function (url) {
      return $http({
        method: 'DELETE',
        url: url
      })
    };

    return request;
  }]);
