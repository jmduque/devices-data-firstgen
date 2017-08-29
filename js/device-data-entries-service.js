angular.module('DeviceDataEntries').service('DeviceDataEntriesService', function($http) {
	this.getEntries = function() {
		return $http({
			method: 'GET',
			url: 'http://ext-devices-api.energolabs.com/api/v1/devices/data?token=6926a45f-7993-4aca-b116-ece074240ba1&limit=1000'
		});
	};
});