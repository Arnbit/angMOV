'use strict';

var tv = angular.module('tv', ['ngRoute']);



tv.controller('tvCtrl' , ['$scope', '$location', 
	function($scope, $location) {
		//console.log ($location.path());
		$scope.isActive = function (viewLocation) { 
        	return viewLocation === $location.path();
    	};
}]);

