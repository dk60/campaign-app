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
		            status : true
		        }
			return compaignChanelService.postCompaignChanel(params).then(function(response) {
				return response.data;
			})
			}
		};
		
		return dataFactory;
 }]);