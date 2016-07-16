var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/',{//from html  a href="#/"
		template:$('#first').html(),//connectin out template whiz id="first"
		controller:'First'//connect controller main (look down)
	}).when('/second',{
		template:$('#second').html(),
		controller:'Second'
	});
});

app.controller('First', ['$scope', function($scope){
	$scope.phones = data;
	$scope.order = '';
	$scope.sortName = function(name){
		$scope.order = name;
		$scope.order = age;
	};
}]);

app.controller('Second', ['$scope', function($scope){
	$scope.name = 'Ivan';
}]);

