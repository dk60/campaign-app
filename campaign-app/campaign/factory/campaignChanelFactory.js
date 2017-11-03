 app.factory('campaignChanelFactory',['campaignChanelService','$filter', function(campaignChanelService, $filter){
	var dataFactory = {};

		dataFactory.getCampaignChanel= function(){			 
			return campaignChanelService.getChanel().then(function(response) {
				return response.data;
			})
		};
		dataFactory.postCampaignChanel= function(chenel){
			if(chenel){
				var date = $filter('date')(new Date(), 'dd/MM/yyyy');
		        var params = {
		            channel_name : chenel.channel_name,
		            create_date : date,
		            update_date : date,
		            status : 1
		        }
			return campaignChanelService.postCampaignChanel(params).then(function(response) {
				return response.data;
			})
			}
		};
		dataFactory.editCampaignChenel = function(params){
        return campaignChanelService.editCampaignChenel(params).then(function(response, status){
            	return response.data;
	        });
	    };

	    dataFactory.deleteCampaignChenel = function(params){
	        return campaignChanelService.deleteCampaignChenel(params).then(function(response,status){
	            return response.data;
	        });
	    };
		
		return dataFactory;
 }]);