app.service('compaignService', function ($rootScope, $http, BaseURL) {
    
    this.getCategories = function () {
        var promise = $http.get(BaseURL + 'getCompaign', {} ).then(function(response) {
                return response;
            });
            return promise;
        };

    this.getAudienceSegement = function () {
        var promise = $http.get(BaseURL + 'getAudienceSegement', {} ).then(function(response) {
                return response;
            });
            return promise;
        };

    this.postAudienceSegement = function (segment) {
        var promise = $http.post(BaseURL + 'audienceSegement', {params : segment} ).then(function(response) {
                return response;
            });
            return promise;
        };

});
