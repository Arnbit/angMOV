'use strict';

// Declare app level module which depends on views, and components
var movApp = angular.module('movApp', [
  'ngRoute',
  'movies',
  'tv',
  'movApp.version'
]).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.
      when('/movies', {
        templateUrl: 'movies/view1.html',
        controller: 'moviesCtrl',
        controllerAs: "app1"
      }).
      when('/tv', {
        templateUrl: 'tv/view2.html',
        controller: 'tvCtrl',
        controllerAs: "app2"
      }).
      otherwise({
        redirectTo: '/movies',
        activetab: 'movies'
      });
  //$routeProvider.otherwise({redirectTo: '/movies'});
}]);
