app.controller('LoginController',['$scope','loginService', 'API_URL', '$window', function($scope, loginService, API_URL, $window) {

	$scope.userLogin = function(user){
		var params = {
            method: 'Post',
            url: API_URL.User_Login,
            params : user
        }

        return loginService.userLogin(user).then(function(response, status) {
        	if (response.data.length) {
        		$window.location.href = 'http://localhost:8081';
        	}else{
        		alert('Invalid id..');
        	}
        });
	}
}])