
app.controller('CompaignController',['$scope','compaignFactory','compaignChanelFactory', function($scope, compaignFactory, compaignChanelFactory ) {

    $scope.headingTitle = 'App Start';
	
    $scope.compaignSection = true;
    $scope.audienceSegementSection = false;
    $scope.compaignActivate = false;
    $scope.getCategories = function () {
        return compaignFactory.getCategories().then(function(response, status) {
            document.getElementById("setObject").style.color = "#5e92e5";
            $scope.obj = response;
        });
    };
    $scope.compaignSelectValid = false;
    $scope.selectCompaign = function(data){
        $scope.compaignName = data;
        $scope.compaignSelectValid = true;
    };
    $scope.compaignCreate = function(){
        document.getElementById("setObject").style.background = "#b0e2e5";        
        $scope.compaignSection = false;
        $scope.compaignChanelSection =true;

        return compaignFactory.getAudienceSegement().then(function(response, status){
            $scope.audienceSegementData = response.data;
        })
    };

    $scope.savedAudienceSegement = function(){
        document.getElementById("setTargetAudience").style.background = "#b0e2e5";        
        $scope.audienceSegementSection = false;
        $scope.compaignActivate = true;        
        document.getElementById("setActivateCompaign").style.color = "#5e92e5";
        document.getElementById("setActivateCompaign").style.background = "#b0e2e5";
    };

    $scope.createNewCompaign = function(){
        $scope.compaignSection = true;
        $scope.audienceSegementSection = false;
        $scope.compaignActivate = false;
        $scope.compaignName = '';
        document.getElementById("setObject").removeAttribute("style");
        document.getElementById("setTargetAudience").removeAttribute("style");
        document.getElementById("setConfigureChanel").removeAttribute("style");
        document.getElementById("setConfigureChanel").removeAttribute("style");
        document.getElementById("setActivateCompaign").removeAttribute("style");
        document.getElementById("setActivateCompaign").removeAttribute("style");
        document.getElementById("setObject").style.color = "#5e92e5";
    };

    $scope.newSegementCreate = function(segment){
        $scope.audienceSegementSection = false;
        $scope.newSegementCreateForm = true;
    }
    $scope.savedAudience = function(segment){
        return compaignFactory.postAudienceSegement(segment).then(function(response, status){
            alert('SuccessFully Add..');
            $scope.newSegementCreateForm = false;
            $scope.audienceSegementSection = true;
        })
    };

    $scope.audienceCancel = function(){
        $scope.audienceSegementSection = true;
        $scope.newSegementCreateForm = false;
    };

    $scope.reset = function(){
    	$scope.obj = '';
    };

    //compaign chanel section

    $scope.getCompaignChanel = function(params){
        document.getElementById("setConfigureChanel").style.color = "#5e92e5";
        return compaignChanelFactory.getCompaignChanel(params).then(function(response, status) {
            $scope.compaignChenel = response;
        });
    };

    $scope.newChanel = function(){
        $scope.compaignChanelSection =false;
        $scope.newCompaignChanelSection = true;
    };

    $scope.savedCompaignChanel = function(){
        document.getElementById("setConfigureChanel").style.background = "#b0e2e5";
        document.getElementById("setTargetAudience").style.color = "#5e92e5";
        $scope.compaignChanelSection = false;
        $scope.audienceSegementSection = true;        
    };

    $scope.createNewCompaignChanel = function(chenel){        
        return compaignChanelFactory.postCompaignChanel(chenel).then(function(response, status) {
            $scope.compaignChanelSection = true;
            $scope.newCompaignChanelSection = false;
        });
    };

}]);