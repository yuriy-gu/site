//http://www.internet-technologies.ru/articles/article_1637.html

var myApp = angular.module('myApp',[]); //created a global object agular whiz name of our html ng='myApp'

myApp.controller('myAppCtrl', function($scope){//creating a controller
	
	//its for input ng-model
	$scope.name = 'Alex';//scope позволяет объединить html и controller (область в которой находятся различные свойства)
	
	//for ng-click
	$scope.changeName = function() {
	$scope.name = 'Ivan';
	};
	
	//its for ng-click changeBg
	$scope.isHide = false;
	$scope.blockBg = '#d4caca';
	$scope.changeBg = function(color) {
		if(color == '#d4caca'){
			$scope.blockBg = '#005a11';
			$scope.isHide = true;
		} else {
			$scope.blockBg = '#d4caca';
			$scope.isHide = false;
		}
	}; 

	//ng-repeat='n in items'
	$scope.items = ['Main', 'Contacts', 'Delivery'];
	$scope.selected = '';
	$scope.qwerty = function(n){
		$scope.selected = n;
	};

	$scope.collect = [
	{one: 1, two: 2, three: 33},
	{one: 11, two: 243, three: 3},
	{one: 123, two: 24, three: 36}
];

});

myApp.directive('myDirectiveFirst', function(){
		return {
			template: '<ul><li ng-repeat="n in collect">{{n}}</li></ul>'
		}
});
myApp.directive('myDirectiveSecond', function(){
		return {
			template: '<ul><li ng-repeat="n in collect">{{n}}</li></ul>'
		}
});
myApp.directive('myDirectiveThird', function(){
		return {
			template: '<ul><li ng-repeat="n in collect">{{n}}</li></ul>'
		}
});