var app = angular.module('MyApp', ['ngCookies', 'ngResource', 'ngMessages', 'ngRoute', 'mgcrea.ngStrap']);

   app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);

	    $routeProvider	  
		  .when('/login', {
		    templateUrl: 'login/views/login.html',
		    controller: 'LoginController'
		  })
		  .when('/compaign', {
		    templateUrl: 'compaign/views/home.html',
		    controller: 'CompaignController'
		  })
		  .otherwise({
		    redirectTo: '/login'
		  });
  }]);

angular.module('MyApp').constant('BaseURL', 'http://localhost:8081/api/');