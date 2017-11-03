 app.factory('campaignFactory',['campaignService','$filter', function(campaignService, $filter){
	var dataFactory = {};

		dataFactory.getCategories= function(){
			 var campaningData = {
	        	awarnes : [],
	        	consdrition : [],
	        	converstion : []
        	}
			return campaignService.getCategories().then(function(response) {
				angular.forEach(response.data, function(value, key) {
        		if(value.objective_id == 1){
                    campaningData.awarnes.push({
                        'id': value.obj_id,
                        'awarnes': value.sub_objective_name
                    })
                } else if(value.objective_id == 2){
                    campaningData.consdrition.push({
                        'id': value.obj_id,
                        'consdrition': value.sub_objective_name
                    })
                } else if(value.objective_id == 3){
                    campaningData.converstion.push({
                        'id': value.obj_id,
                        'converstion': value.sub_objective_name
                    })
                }
                });
				return campaningData;
			})
		};
		
		return dataFactory;
 }]);