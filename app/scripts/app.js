'use strict';

/**
 * @ngdoc overview
 * @name circleciHeheApp
 * @description
 * # circleciHeheApp
 *
 * Main module of the application.
 */
angular
  .module('circleciHeheApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
