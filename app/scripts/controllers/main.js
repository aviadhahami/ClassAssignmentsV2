'use strict';

/**
 * @ngdoc function
 * @name classAssignmentsV2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the classAssignmentsV2App
 */
 angular.module('classAssignmentsV2App')
 .controller('MainCtrl', function ($scope,getClassContentFactory) {
 	$scope.calcDays = function (date1,date2){
 		var timeDiff = Math.abs(date2.getTime() - date1.getTime());
 		var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
 		return diffDays;
 	};
  //=======AJAX REQUEST ! =========
  getClassContentFactory.getContent('data/idc/', 'cs16')
  .success(function (data) {
  	$scope.assignList = data;
                        //converting the JSON to Date() object
                        //Get 1 day in milliseconds
                        var today = new Date();
                        angular.forEach(data, function (item) {
                        	var dateStr = item.due.month + '/' + item.due.day + '/' + item.due.year;
                        	item.due = new Date(dateStr);
                        	//item.due = new Date(item.due.year, item.due.month, item.due.day);
                        	item.timeLeft = $scope.calcDays(today,item.due);
                        });
                    }).error(function (data) {
                    	console.log('CRAZY ERROR!');
                    	console.log(data);
                    });
                });