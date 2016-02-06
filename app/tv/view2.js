'use strict';

angular.module('movApp.tv', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tv', {
    templateUrl: 'tv/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {

}]);