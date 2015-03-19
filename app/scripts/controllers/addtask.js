'use strict';

/**
 * @ngdoc function
 * @name classAssignmentsV2App.controller:AddtaskCtrl
 * @description
 * # AddtaskCtrl
 * Controller of the classAssignmentsV2App
 */
angular.module('classAssignmentsV2App')
  .controller('AddtaskCtrl', function ($scope,setClassContentFactory) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
     $scope.user = {
      title: 'Write Task Subject Here',
      submissionDate:'',
      number:'number here '
    };
    $scope.createTask = function(){
    	setClassContentFactory($scope.user);
    };
  })
  .config( function($mdThemingProvider){
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default')
        .primaryPalette('yellow')
        .dark();
  });
 
