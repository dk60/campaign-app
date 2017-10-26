var app = angular.module('MyApp', ['ngCookies', 'ngResource', 'ngMessages', 'ngRoute', 'mgcrea.ngStrap']);

   app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);

	    $routeProvider
	  .when('/', {
	    templateUrl: 'compaign/views/home.html',
	    controller: 'CompaignController'
	  })
	  .when('/login', {
	    templateUrl: 'login/views/login.html',
	    controller: 'LoginController'
	  })
	  .otherwise({
	    redirectTo: '/'
	  });
  }]);

angular.module('MyApp').constant('BaseURL', 'http://localhost:8081/api/');