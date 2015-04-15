'use strict';

/**
 * @ngdoc function
 * @name classAssignmentsV2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the classAssignmentsV2App
 */
 angular.module('classAssignmentsV2App')
 .controller('MainCtrl', function ($scope,getClassContentFactory,setClassContentFactory) {
 	$scope.datePattern = 'dd/MM/yyyy';
 	$scope.loading = true;
 	$scope.didSubmit = true;
 	$scope.calcDays = function (date1,date2){
 		//console.log(date1,date2);
 		var timeDiff = Math.abs(date2.getTime() - date1.getTime());
 		var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
 		return diffDays;
 	};
  //=======AJAX REQUEST ! =========
  getClassContentFactory.getContent('data/idc/', 'cs16')
  .success(function (data) {
  	$scope.loading = false;
  	$scope.assignList = data;
                        //converting the JSON to Date() object
                        //Get 1 day in milliseconds
                        var today = new Date();
                        angular.forEach(data, function (item) {
                        	item.dueRaw = new Date(item.due.year, item.due.month-1, item.due.day);
                        	item.due = new Date(item.due.year, item.due.month, item.due.day);
                        	item.timeLeft = $scope.calcDays(today,item.dueRaw);
                        	item.timeLeftString = item.timeLeft <= 1 ? 'TODAY' : item.timeLeft + ' Days to go';
                        });
                    }).error(function (data) {
                    	console.log('CRAZY ERROR!');
                    	console.log(data);
                    });

//OUT GOING AJAX //
var d = new Date();
$scope.user = {
	subject: '',
	due: {
		year: d.getFullYear(),
		month: d.getMonth() + 1,
		day: d.getDate()
	},
	number: 0,
	rawDateInput : ''
};

$scope.createTask = function () {
	$scope.didSubmit = false;
	$scope.user.rawDateInputContainer = $scope.user.rawDateInput.split('\/');
	$scope.user.due.year = $scope.user.rawDateInputContainer[2];
	$scope.user.due.month = $scope.user.rawDateInputContainer[1];
	$scope.user.due.day = $scope.user.rawDateInputContainer[0];
	$scope.user.rawDateInputContainer = 'done';
	//console.log($scope.user.due.day,$scope.user.due.month,$scope.user.due.day);
	setClassContentFactory.setContent($scope.user);
	console.log($scope.user);
};  

$scope.selectedDate = d;
});
