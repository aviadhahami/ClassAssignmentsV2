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
    var diffRaw = timeDiff / (1000 * 3600 * 24); //calc how many days left
    var diffDays = diffRaw >= 0 && diffRaw <= 1 ? (diffRaw > 0.5 ? 1 : 0): Math.ceil(diffRaw);
    //var diffDays = timeDiff / (1000 * 3600 * 24);
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
                          item.due.hour = !! item.due.hour  ? item.due.hour  : 23;
                          item.due.minutes = !! item.due.minutes  ? item.due.minutes  : 59; 
                          item.dueRaw = new Date(item.due.year, item.due.month-1, item.due.day, item.due.hour, item.due.minutes);
                          console.log(item);
                          item.due = new Date(item.due.year, item.due.month, item.due.day);
                          item.timeLeft = $scope.calcDays(today,item.dueRaw);
                          item.timeLeftString = item.timeLeft === 0 ? 'TODAY' : (item.timeLeft === 1 ? 'TOMORROW' : item.timeLeft + ' Days to go');
                          //item.timeLeftString = item.timeLeft + ' Days to go';
                          console.log(item.timeLeft,item.timeLeftString);
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
		day: d.getDate(),
    hour: 23,
    minutes : 59
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

  //hour and minutes
  $scope.user.due.hour = $scope.user.due.hour > 23 ? 23 : $scope.user.due.hour ;
  $scope.user.due.minutes = $scope.user.due.minutes > 59 ? 59 : $scope.user.due.minutes ;
  //end hour

  $scope.user.rawDateInputContainer = 'done';

  //resetting the due object

  $scope.user.due = {
    year : $scope.user.due.year,
    month : $scope.user.due.month,
    day: $scope.user.due.day,
    hour :  $scope.user.due.hour,
    minutes : $scope.user.due.minutes
  };
	//console.log($scope.user.due.day,$scope.user.due.month,$scope.user.due.day);
	setClassContentFactory.setContent($scope.user);
	console.log($scope.user);
};  

$scope.selectedDate = d;


});
