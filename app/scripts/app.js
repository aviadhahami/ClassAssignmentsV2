'use strict';

/**
 * @ngdoc overview
 * @name classAssignmentsV2App
 * @description
 * # classAssignmentsV2App
 *
 * Main module of the application.
 */
 angular
 .module('classAssignmentsV2App', [
  'ngAnimate',
  'ngAria',
  'ngCookies',
  'ngMessages',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'ngMaterial',
  'customFilters',
  'customFactories',
  '720kb.datepicker'
  ])
 .config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .when('/about', {
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl'
  })
  .when('/homework', {
    templateUrl: 'views/homework.html',
    controller: 'HomeworkCtrl'
  })
  .when('/addTask', {
    templateUrl: 'views/addtask.html',
    controller: 'AddtaskCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
}).config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
  .primaryPalette('deep-purple')
  .accentPalette('orange');
});
