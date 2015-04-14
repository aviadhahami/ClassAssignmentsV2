'use strict';

/**
 * @ngdoc function
 * @name classAssignmentsV2App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the classAssignmentsV2App
 */
 angular.module('classAssignmentsV2App')
 .controller('AboutCtrl', function ($scope) {
 	$scope.awesomeThings = [
 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];
 	$scope.tech = [
 	{href : 'https://nodejs.org/',
 	logo: 'http://cdn.rawgit.com/ferventcoder/chocolatey-packages/bd3902ea9e357d5d1b3ece2977f02e5ef60ca84a/icons/nodejs.png'
 	},
 	{href: 'http://bower.io/',
 	logo : 'http://fabricematrat.github.io/grails-rave/img/bower.png'
 	},
 	{
 		href: 'http://gruntjs.com/',
 		logo: 'https://i.cloudup.com/bDkmXyEmr5.png'
 	},
 	{
 		href:'http://yeoman.io/',
 		logo:'http://www.losasso.com/wp-content/uploads/2015/04/yeoman-logo.png'
 	},
 	{
 		href : 'https://angularjs.org/',
 		logo :'http://www.unixstickers.com/image/cache/data/stickers/angularjs/angular-js-600x600.png'
 	},
 	{
 		href: 'http://getbootstrap.com/',
 		logo : 'http://www.basstokman.com/wp-content/plugins/mobilechief-mobile-site-creator/lib/bootstrap/docs/assets/img/bootstrap-docs-readme.png'
 	}];
 });
