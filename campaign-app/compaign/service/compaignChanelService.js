app.service('compaignChanelService', function ($rootScope, $http, BaseURL,$window) {
    var params = {};
    var token = $window.localStorage.accessToken;
    var userId = $window.localStorage.userId;


    this.getChanel = function () {
        params.token = token;
        var promise = $http.post(BaseURL + 'getCompaignChannel', {params} ).then(function(response) {
                return response;
            });
            return promise;
        };

    this.postCompaignChanel = function (params) {
        params.token = token;
        params.userId = userId;
        var promise = $http.post(BaseURL + 'addNewChannel', {params} ).then(function(response) {
                return response;
            });
            return promise;
        };
    this.editCompaignChenel = function(params){
        params.token = token;
        params.userId = userId;
        var promise = $http.post(BaseURL + 'editCompaignChannel', {params} ).then(function(response) {
                return response;
            });
            return promise;
        };

    this.deleteCompaignChenel = function(params){
        params.token = token;
        params.userId = userId;
        var promise = $http.post(BaseURL + 'deleteCompaignChannel', {params} ).then(function(response) {
                return response;
            });
            return promise;
        };
});