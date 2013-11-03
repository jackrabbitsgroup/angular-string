/**
*/

'use strict';

angular.module('myApp').controller('HomeCtrl', ['$scope', 'jrgString', '$location', function($scope, jrgString, $location) {
	var parsedUrl =jrgString.parseUrl({url:$location.url(), rootPath:'/'});
	$scope.parsedUrl =parsedUrl;
	
	$scope.newUrl =jrgString.stripUrlParams($location.url(), ['p2'], {});
}]);