angular.module('DeviceDataEntries').service('DeviceDataEntriesService', function($http) {
	this.getParameter = function(paramName) {
		var searchString = window.location.search.substring(1),
			i, val, params = searchString.split("&");

		for (i=0;i<params.length;i++) {
			val = params[i].split("=");
			if (val[0] == paramName) {
			return val[1];
			}
		}
		return null;
	}

	this.getEntries = function() {
		var finalUrl = "http://ext-devices-api.energolabs.com/api/v1/devices/data?token=6926a45f-7993-4aca-b116-ece074240ba1&limit=1000";
		var imei = this.getParameter('imei');
		if (imei) {
			finalUrl += "&imei=" + imei;
		}
		var st = this.getParameter('st');
		if (st) {
			finalUrl += "&st=" + st;
		}
		return $http({
			method: 'GET',
			url: finalUrl
		});
	};
});
