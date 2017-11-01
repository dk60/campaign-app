app.service('audienceService', function ($rootScope, $http, BaseURL,$window) {
    var params = {};
    var token = $window.localStorage.accessToken;
    var userId = $window.localStorage.userId;


    this.getAudienceSegement = function () {
        params.token = token;
        params.userId = userId;
        var promise = $http.get(BaseURL + 'getAudienceSegement', {params} ).then(function(response) {
                return response.data;
            });
            return promise;
        };

    this.postAudienceSegement = function (params) {
        params.token = token;
        params.userId = userId;
        var promise = $http.post(BaseURL + 'audienceSegement', {params} ).then(function(response) {
                return response;
            });
            return promise;
        };
    this.editAudienceSegement = function(params){
        params.token = token;
        params.userId = userId;
        var promise = $http.post(BaseURL + 'editAudienceSegement', {params} ).then(function(response) {
                return response;
            });
            return promise;
        };

    this.deleteAudienceSegement = function(params){
        params.token = token;
        params.userId = userId;
        var promise = $http.post(BaseURL + 'deleteAudienceSegement', {params} ).then(function(response) {
                return response;
            });
            return promise;
        };
});