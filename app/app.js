'use strict';

// Declare app level module which depends on views, and components
var movApp = angular.module('movApp', [
  'ngRoute',
  'movApp.movies',
  'movApp.tv',
  'movApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/movies'});
}]);
