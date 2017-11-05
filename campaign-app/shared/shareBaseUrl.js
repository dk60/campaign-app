app.service('shareBaseUrl', function ($window) {

    return {
        BaseUrl: function (month,year) {
            var params = {};
                params.token = $window.localStorage.accessToken;
                params.userId = $window.localStorage.userId;
                params.BaseUrl = 'http://localhost:8081/api/';
            return params;
        }
    };

});