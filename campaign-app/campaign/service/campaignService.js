app.service('campaignService', function ($rootScope, $http, shareBaseUrl,$window) {
    
   var params = {};
    
    this.getCategories = function () {
        params = shareBaseUrl.BaseUrl();
        var promise = $http.get(params.BaseUrl + 'getCampaign', {params} ).then(function(response) {
                return response.data;
            });
            return promise;
        };
});
