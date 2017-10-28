app.service('compaignService', function ($rootScope, $http, BaseURL,$window) {
    
   var params = {};
   params.token = $window.localStorage.accessToken;


    this.getCategories = function () {
        var promise = $http.get(BaseURL + 'getCompaign', {params} ).then(function(response) {
                return response;
            });
            return promise;
        };

    this.getAudienceSegement = function () {
        var promise = $http.get(BaseURL + 'getAudienceSegement', {params} ).then(function(response) {
                return response;
            });
            return promise;
        };

    this.postAudienceSegement = function (params) {
        var promise = $http.post(BaseURL + 'audienceSegement', {params : params} ).then(function(response) {
                return response;
            });
            return promise;
        };

});
