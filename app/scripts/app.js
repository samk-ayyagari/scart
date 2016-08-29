'use strict';

/**
 * @ngdoc overview
 * @name shoppingCartApp
 * @description
 * # shoppingCartApp
 *
 * Main module of the application.
 */
angular
  .module('shoppingCartApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngDialog'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'mc'
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'mc'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
