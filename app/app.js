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
    'ui.bootstrap.tpls'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'components/home/home.html',
        controller: 'HomeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
