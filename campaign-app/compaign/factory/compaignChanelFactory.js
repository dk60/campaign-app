 app.factory('compaignChanelFactory',['compaignChanelService','$filter', function(compaignChanelService, $filter){
	var dataFactory = {};

		dataFactory.getCompaignChanel= function(){			 
			return compaignChanelService.getChanel().then(function(response) {
				return response.data;
			})
		};
		dataFactory.postCompaignChanel= function(chenel){
			if(chenel){
				var date = $filter('date')(new Date(), 'dd/MM/yyyy');
		        var params = {
		            channel_name : chenel.channel_name,
		            create_date : date,
		            update_date : date,
		            status : 1
		        }
			return compaignChanelService.postCompaignChanel(params).then(function(response) {
				return response.data;
			})
			}
		};
		dataFactory.editCompaignChenel = function(params){
        return compaignChanelService.editCompaignChenel(params).then(function(response, status){
            	return response.data;
	        });
	    };

	    dataFactory.deleteCompaignChenel = function(params){
	        return compaignChanelService.deleteCompaignChenel(params).then(function(response,status){
	            return response.data;
	        });
	    };
		
		return dataFactory;
 }]);