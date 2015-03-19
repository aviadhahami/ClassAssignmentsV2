'use strict';

/**
 * @ngdoc function
 * @name classAssignmentsV2App.controller:HomeworkCtrl
 * @description
 * # HomeworkCtrl
 * Controller of the classAssignmentsV2App
 */
angular.module('classAssignmentsV2App')
        .controller('HomeworkCtrl', function ($scope,getClassContentFactory) {

            $scope.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];

            //=======AJAX REQUEST ! =========
            getClassContentFactory.getContent('data/idc/', 'cs16')
                    .success(function (data) {
                        $scope.assignList = data;
                        //converting the JSON to Date() object
                        angular.forEach(data, function (item) {
                            item.due = new Date(item.due.year, item.due.month, item.due.day);
                        });
                    }).error(function (data) {
                console.log('CRAZY ERROR!');
                console.log(data);
            });
//            var json = {'records': [{'number': '1', 'subject': 'Operating Systems', 'due': {'year': 2015, 'month': 3, 'day': 22}}, {'number': '1', 'subject': 'Digital Graphics', 'due': {'year': 2015, 'month': 3, 'day': 22}}, {'number': '2', 'subject': 'Funding', 'due': {'year': 2015, 'month': 3, 'day': 16}}, {'number': '1', 'subject': 'Statistics', 'due': {'year': 2015, 'month': 3, 'day': 16}}, {'number': '1', 'subject': 'testtt', 'due': {'year': 2015, 'month': 3, 'day': 22}}]};
//            $scope.assignList = json;
//            angular.forEach(json, function (item) {
//                item.due = new Date(item.due.year, item.due.month, item.due.day);
//            });



        });
