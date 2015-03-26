'use strict';

/**
 * @ngdoc function
 * @name classAssignmentsV2App.controller:AddtaskCtrl
 * @description
 * # AddtaskCtrl
 * Controller of the classAssignmentsV2App
 */
angular.module('classAssignmentsV2App')
        .controller('AddtaskCtrl', function ($scope, setClassContentFactory) {

            var d = new Date();
            $scope.user = {
                subject: 'Write Task Subject Here',
                due: {
                    year: d.getFullYear(),
                    month: d.getMonth() + 1,
                    day: d.getDate()
                },
                number: 'number here'
            };

            $scope.createTask = function () {
                setClassContentFactory.setContent($scope.user);
                console.log($scope.user);
            };
        })
        .config(function ($mdThemingProvider) {
            // Configure a dark theme with primary foreground yellow
            $mdThemingProvider.theme('docs-dark', 'default')
                    .primaryPalette('yellow')
                    .dark();
        });

