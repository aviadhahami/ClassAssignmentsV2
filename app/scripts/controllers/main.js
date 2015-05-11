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


  $scope.calcDateDiffAndString = function (today,itemDay){

    //console.log('today: ' + today, ' item Day ' + itemDay);
    if (today.getDate() === itemDay.getDate()){
      //means that's todat, we should calc time downward
      var hourDiff = today.getHours() - itemDay.getHours();

      //console.log(hourDiff,'rounded to',Math.round(hourDiff/(86400)));
      if (hourDiff < 0){
        return 'submission passed!';
      }else{
        return '~ ' + hourDiff + (hourDiff === 1 ? ' hour' : ' hours');
      }

    }else if(today.getFullYear() === itemDay.getFullYear() && Math.abs(today.getDate() - itemDay.getDate()) === 1){
      return 'Tomorrow';
    }else{

      //means we have more than one day
      var timeDiff= Math.abs(today- itemDay);
      //var diffDays = timeDiff / (1000 * 3600 * 24);
      var diffDays = Math.ceil(timeDiff/(24 * 60 * 60 * 1000));
      return diffDays + ' days';
    }

  };

  $scope.calcRawDiff = function (today,dueRaw){
    return Math.abs(today-dueRaw);
  };


  //=======AJAX REQUEST ! =========
  getClassContentFactory.getContent('data/idc/', 'cs16')
  .success(function (data) {
    $scope.loading = false;
    $scope.assignList = data;
    //converting the JSON to Date() object
    var today = new Date();
    angular.forEach(data, function (item) {
      item.due.hour = !! item.due.hour  ? item.due.hour  : 23;
      item.due.minutes = !! item.due.minutes  ? item.due.minutes  : 59;
      //decreasing month by one
      item.dueRaw = new Date(item.due.year, item.due.month-1, item.due.day, item.due.hour, item.due.minutes);
      //console.log(item);
      //REQUIRED FOR FILTER
      item.due = new Date(item.due.year, item.due.month, item.due.day, item.due.hour, item.due.minutes);
      //END OF REQUIRED FOR FILTER

      //console.log('due raw ' + item.dueRaw, ' due ' +item.due);
      item.timeLeftString = $scope.calcDateDiffAndString(today,item.dueRaw);
      item.timeLeft = $scope.calcRawDiff(today,item.dueRaw);
      //item.timeLeftString = item.timeLeft + ' Days to go';
      //console.log(item.timeLeft,item.timeLeftString);
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

    //Hours and minutes
    $scope.user.due.hour = $scope.user.due.hour > 23 ? 23 : $scope.user.due.hour ;
    $scope.user.due.minutes = $scope.user.due.minutes > 59 ? 59 : $scope.user.due.minutes ;
    //end hours

    //console.log($scope.user.due.day,$scope.user.due.month,$scope.user.due.day);
    var readyData = {
      subject : $scope.user.subject,
      due: {
        year: $scope.user.due.year,
        month: $scope.user.due.month ,
        day: $scope.user.due.day,
        hour: $scope.user.due.hour,
        minutes : $scope.user.due.minutes
      },
      number: $scope.user.number,
    };
    console.log(readyData);
    setClassContentFactory.setContent(readyData);
    //console.log($scope.user);
  };

  $scope.selectedDate = d;


});
