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
    'leaflet-directive'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'components/home/home.html',
        controller: 'HomeCtrl'
      })
      .when('/search', {
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


