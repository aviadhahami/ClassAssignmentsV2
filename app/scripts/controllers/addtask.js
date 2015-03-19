'use strict';

/**
 * @ngdoc function
 * @name classAssignmentsV2App.controller:AddtaskCtrl
 * @description
 * # AddtaskCtrl
 * Controller of the classAssignmentsV2App
 */
angular.module('classAssignmentsV2App')
  .controller('AddtaskCtrl', function ($scope){//,setClassContentFactory) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
     $scope.user = {
      subject: 'Write Task Subject Here',
      due:{
          year:'',
          month:'',
          day:''
      },
      number:'number here'
    };
    $scope.alert = function (){
        console.log(1);
    };
    $scope.createTask = function(){
    	//setClassContentFactory($scope.user);
        console.log($scope.user);
    };
  })
  .config( function($mdThemingProvider){
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default')
        .primaryPalette('yellow')
        .dark();
  });
 
