 app.factory('audienceFactory',['audienceService','$filter', function(audienceService, $filter){
	var dataFactory = {};

		dataFactory.getAudienceSegement= function(){
			return audienceService.getAudienceSegement().then(function(response) {
				return response.data;
			})
		};
		dataFactory.postAudienceSegement = function(segment){
			var date = $filter('date')(new Date(), 'dd/MM/yyyy');
			var params = {
		            segement_name : segment.segement_name,
		            segment_form_data : segment.segment_form_data,
		            create_date : date,
		            update_date : date,
		            status : 1
		        }
			return audienceService.postAudienceSegement(params).then(function(response) {
				return response;
			})
		};
		dataFactory.editAudienceSegement = function(params){
        return audienceService.editAudienceSegement(params).then(function(response, status){
            	return response.data;
	        });
	    };

	    dataFactory.deleteAudienceSegement = function(params){
	        return audienceService.deleteAudienceSegement(params).then(function(response,status){
	            return response.data;
	        });
	    };
		
		return dataFactory;
 }]);