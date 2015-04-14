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
                        });
                    }).error(function (data) {
                    	console.log('CRAZY ERROR!');
                    	console.log(data);
                    });

//OUT GOING AJAX //
var d = new Date();
$scope.user = {
	subject: 'Write Task Subject Here',
	due: {
		year: d.getFullYear(),
		month: d.getMonth() + 1,
		day: d.getDate()
	},
	number: 99,
	rawDateInput : ''
};

$scope.createTask = function () {

	$scope.user.rawDateInput = $scope.user.rawDateInput.split('\/');
	$scope.user.due.year = $scope.user.rawDateInput[2];
	$scope.user.due.month = $scope.user.rawDateInput[1];
	$scope.user.due.day = $scope.user.rawDateInput[0];
	console.log($scope.due.day,$scope.due.month,$scope.due.day);
	setClassContentFactory.setContent($scope.user);
	console.log($scope.user);
};  

$scope.selectedDate = d;
});
