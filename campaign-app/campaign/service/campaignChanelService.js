app.service('campaignChanelService', function ($rootScope, $http, BaseURL,$window) {
    var params = {};
    var token = $window.localStorage.accessToken;
    var userId = $window.localStorage.userId;


    this.getChanel = function () {
        params.token = token;
        var promise = $http.post(BaseURL + 'getCampaignChannel', {params} ).then(function(response) {
                return response.data;
            });
            return promise;
        };

    this.postCampaignChanel = function (params) {
        params.token = token;
        params.userId = userId;
        var promise = $http.post(BaseURL + 'addNewChannel', {params} ).then(function(response) {
                return response;
            });
            return promise;
        };
    this.editCampaignChenel = function(params){
        params.token = token;
        params.userId = userId;
        var promise = $http.post(BaseURL + 'editCampaignChannel', {params} ).then(function(response) {
                return response;
            });
            return promise;
        };

    this.deleteCampaignChenel = function(params){
        params.token = token;
        params.userId = userId;
        var promise = $http.post(BaseURL + 'deleteCampaignChannel', {params} ).then(function(response) {
                return response;
            });
            return promise;
        };
});