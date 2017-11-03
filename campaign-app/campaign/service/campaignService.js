app.service('campaignService', function ($rootScope, $http, BaseURL,$window) {
    
   var params = {};
    var token = $window.localStorage.accessToken;
    var userId = $window.localStorage.userId;


    this.getCategories = function () {
        params.token = token;
        params.userId = userId;
        var promise = $http.get(BaseURL + 'getCampaign', {params} ).then(function(response) {
                return response.data;
            });
            return promise;
        };
});
