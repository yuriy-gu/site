var myApp = angular.module('myApp', []).controller('personCtrl', function($scope) {
     $scope.firstName = "John",
     $scope.lastName = "Doe"

     $scope.qwerty = [
     {name: 'asd',
 	  age:'1',
 	  myFilter: '10'},
     {name: 'zxc',
 	 age:'4',
 	 myFilter: '30'},
     {name: 'qwe',
 	 age: '2',
 	  myFilter: '20'},
     {name: 'odr',
 	 age:'3',
 	 myFilter: '40'},
     ];


});

myApp.filter('myFilter', function() {
	return function(x) {
		return x + ' - yers using';
	};
});

// angular.module('myApp', []).controller('namesCtrl', function($scope) {
//     $scope.names = [
//         {name:'Jani',country:'Norway'},
//         {name:'Carl',country:'Sweden'},
//         {name:'Margareth',country:'England'},
//         {name:'Hege',country:'Norway'},
//         {name:'Joe',country:'Denmark'},
//         {name:'Gustav',country:'Sweden'},
//         {name:'Birgit',country:'Denmark'},
//         {name:'Mary',country:'England'},
//         {name:'Kai',country:'Norway'}
//         ];
// });