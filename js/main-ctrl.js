angular.module('DeviceDataEntries').controller('MainCtrl', function($scope, DeviceDataEntriesService) {
	

	DeviceDataEntriesService.getEntries()
		.then(function(result) {
			console.log(result);
			console.log(result.data);
			$scope.characters = result.data;
		});

});