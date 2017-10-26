app.service('loginService', function ($rootScope, $http, API_URL, BaseURL) {

    this.userLogin = function (params) {
    	
        var promise = $http.post(BaseURL + 'login' ,  {params}).then(function(response) {
                return response;
            });
            return promise;
    }
});
