'use strict';

///////////////// User Start///////////////////////


demoApp.controller('GreetingCtrl', function($scope, $location) {
	$scope.greeting = { name : 'dustin'};
});

demoApp.controller('FooCtrl', function($scope, MyService) {
	$scope.data = MyService;
});

demoApp.controller('UserCtrl', function($scope, $http) {
	$http.get('json/users.json').success(function(data) {
	    $scope.users = data;
	});
});