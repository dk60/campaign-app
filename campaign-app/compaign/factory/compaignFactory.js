 app.factory('compaignFactory',['compaignService','$filter', function(compaignService, $filter){
	var dataFactory = {};

		dataFactory.getCategories= function(){
			 var companingData = {
	        	awarnes : [],
	        	consdrition : [],
	        	converstion : []
        	}
			return compaignService.getCategories().then(function(response) {
				angular.forEach(response.data, function(value, key) {
        		if(value.objective_id == 1){
                    companingData.awarnes.push({
                        'id': value.obj_id,
                        'awarnes': value.sub_objective_name
                    })
                } else if(value.objective_id == 2){
                    companingData.consdrition.push({
                        'id': value.obj_id,
                        'consdrition': value.sub_objective_name
                    })
                } else if(value.objective_id == 3){
                    companingData.converstion.push({
                        'id': value.obj_id,
                        'converstion': value.sub_objective_name
                    })
                }
                });
				return companingData;
			})
		};
		
		return dataFactory;
 }]);