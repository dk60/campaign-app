
app.controller('CampaignController',['$scope','campaignFactory','campaignChanelFactory','audienceFactory', function($scope, campaignFactory, campaignChanelFactory, audienceFactory ) {

    $scope.headingTitle = 'App Start';
	
    $scope.campaignSection = true;
    $scope.audienceSegementSection = false;
    $scope.campaignActivate = false;
    $scope.getCategories = function () {
        return campaignFactory.getCategories().then(function(response, status) {
            document.getElementById("setObject").style.color = "#5e92e5";
            $scope.obj = response;
        });
    };
    $scope.campaignSelectValid = false;
    $scope.selectCampaign = function(data){
        $scope.campaignName = data;
        $scope.campaignSelectValid = true;
    };
    $scope.campaignCreate = function(){
        document.getElementById("setObject").style.background = "#b0e2e5";        
        $scope.campaignSection = false;
        $scope.campaignChanelSection =true;
    };

    //audienc segement section start


    $scope.getAudienceSegement = function(){
        return audienceFactory.getAudienceSegement().then(function(response, status){
            $scope.audienceSegementData = response;
        })
    };

    $scope.savedAudienceSegement = function(){
        document.getElementById("setTargetAudience").style.background = "#b0e2e5";        
        $scope.audienceSegementSection = false;
        $scope.campaignActivate = true;        
        document.getElementById("setActivateCampaign").style.color = "#5e92e5";
        document.getElementById("setActivateCampaign").style.background = "#b0e2e5";
    };

    $scope.createNewCompaign = function(){
        $scope.campaignSection = true;
        $scope.audienceSegementSection = false;
        $scope.campaignActivate = false;
        $scope.campaignName = '';
        document.getElementById("setObject").removeAttribute("style");
        document.getElementById("setTargetAudience").removeAttribute("style");
        document.getElementById("setConfigureChanel").removeAttribute("style");
        document.getElementById("setConfigureChanel").removeAttribute("style");
        document.getElementById("setActivateCampaign").removeAttribute("style");
        document.getElementById("setActivateCampaign").removeAttribute("style");
        document.getElementById("setObject").style.color = "#5e92e5";
    };

    $scope.newSegementCreate = function(segment){
        $scope.audienceSegementSection = false;
        $scope.newSegementCreateForm = true;
    }
    $scope.savedAudience = function(segment){
        return audienceFactory.postAudienceSegement(segment).then(function(response, status){
            alert('SuccessFully Add..');
            $scope.newSegementCreateForm = false;
            $scope.audienceSegementSection = true;
        })
    };

    $scope.editAudienceSegement = function(chenel){
        return audienceFactory.editAudienceSegement(chenel).then(function(response, status){
            $scope.getAudienceSegement();
        });
    };

    $scope.getCustomSegmentsFields = function(){
        return audienceFactory.getCustomSegmentsFields().then(function(response, status){
            $scope.customFormFields = response;
        });
    };

    $scope.getCustomNewSegments = function(){
        return audienceFactory.getCustomNewSegments().then(function(response, status){
            $scope.customSegementForm = response;
        });
    };

    $scope.deleteAudienceSegement = function(chenel){
        return audienceFactory.deleteAudienceSegement(chenel).then(function(response,status){
            $scope.getAudienceSegement();
        });
    };

    $scope.audienceCancel = function(){
        $scope.audienceSegementSection = true;
        $scope.newSegementCreateForm = false;
    };

    $scope.reset = function(){
    	$scope.obj = '';
    };

    //audienc segement section end

    //compaign chanel section start

    $scope.getCampaignChanel = function(params){
        document.getElementById("setConfigureChanel").style.color = "#5e92e5";
        return campaignChanelFactory.getCampaignChanel(params).then(function(response, status) {
            $scope.campaignChenel = response;
        });
    };

    $scope.newChanel = function(){
        $scope.campaignChanelSection =false;
        $scope.newCampaignChanelSection = true;
    };

    $scope.savedCampaignChanel = function(){
        document.getElementById("setConfigureChanel").style.background = "#b0e2e5";
        document.getElementById("setTargetAudience").style.color = "#5e92e5";
        $scope.campaignChanelSection = false;
        $scope.audienceSegementSection = true;        
    };

    $scope.createNewCampaignChanel = function(chenel){        
        return campaignChanelFactory.postCampaignChanel(chenel).then(function(response, status) {
            $scope.campaignChanelSection = true;
            $scope.newCampaignChanelSection = false;
        });
    };

    $scope.editCampaignChenel = function(chenel){
        return campaignChanelFactory.editCampaignChenel(chenel).then(function(response, status){
            $scope.getCompaignChanel();
        });
    };

    $scope.deleteCampaignChenel = function(chenel){
        return campaignChanelFactory.deleteCampaignChenel(chenel).then(function(response,status){
            $scope.getCampaignChanel();
        });
    };

    $scope.slideChange = function(select){

    }

}]);