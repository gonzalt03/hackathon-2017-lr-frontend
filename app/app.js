'use strict';

/**
 * @ngdoc overview
 * @name frontProjectApp
 * @description
 * # frontProjectApp
 *
 * Main module of the application.
 */
angular
  .module('frontProjectApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ui.bootstrap.tpls',
    '720kb.socialshare',
    'ui.bootstrap.tpls',
    'leaflet-directive',
    'ui.bootstrap.tpls',
    'nvd3'
  ])


  .factory('GlobalService', function() {
    var urlAPI = "http://vps.onefox.fr:3000/";
    return {
      getInfoJeuData : urlAPI + "api-get-data",
      searchElement : urlAPI + "get-id",
      urlAPI : urlAPI
    };
  })


  .config(['socialshareConfProvider', function (socialshareConfProvider) {

    socialshareConfProvider.configure([
      {
        'provider': 'twitter',
        'conf': {
          'hashtags': 'opendata',
          'trigger': 'click',
          'popupHeight': 400,
          'popupWidth' : 400
        }
      },
      {
        'provider': 'facebook',
        'conf': {
          'popupHeight': 400,
          'popupWidth' : 400
        }
      },
      {
        'provider': 'email',
        'conf': {
          'subject' : "Lien vers un open-data",
          'popupHeight' : "300",
          'popupWidth' : "400"
        }
      }
    ]);
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'components/home/home.html',
        controller: 'HomeCtrl'
      })
      .when('/search/:query', {
        templateUrl: 'components/search/search.html',
        controller: 'SearchCtrl'
      })
      .when('/dataset', {
        templateUrl: 'components/dataset/dataset.html',
        controller: 'DatasetCtrl'
      })
      .when('/dataset/:id', {
        templateUrl: 'components/dataset/dataset_details.html',
        controller: 'DatasetDetailsCtrl'
      })
      .when('/builder', {
        templateUrl: 'components/builder/builder.html',
        controller: 'BuilderCtrl'
      })
      .when('/view', {
        templateUrl: 'components/view/view.html',
        controller: 'ViewCtrl'
      })
      .when('/view/:id', {
        templateUrl: 'components/view/view.html',
        controller: 'ViewDetailsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


