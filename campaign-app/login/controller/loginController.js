app.controller('LoginController',['$scope','$rootScope','loginService', '$window','$location', function($scope, $rootScope, loginService, $window,$location) {

	$scope.userLogin = function(user){
        return loginService.userLogin(user).then(function(response, status) {
        	if (response.data) {
                $location.path("/compaign");

                $window.localStorage['accessToken']= response.data.accessToken;
                var email = response.data;
                $rootScope.currentUser = email.data;
        	}else{
        		alert('Invalid id..');
        	}
        });
	};
    $rootScope.logout = function(){
        $window.localStorage['accessToken']= undefined;
        $location.path("/login");
        $rootScope.currentUser = false;
    };

}])