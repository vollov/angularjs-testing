'use strict';

var demoApp = angular.module('appModule', [ 'ngResource', 'ngCookies' ]);

demoApp.config(function($routeProvider, $locationProvider) {
	
	$routeProvider.when('/', {
		templateUrl : 'views/home.html'
	}).when('/users', {
		controller : 'UserCtrl',
		templateUrl : 'views/user/list.html'
	}).otherwise({
		redirectTo : '/'
	});
	
	$locationProvider.html5Mode(true);
});