'use strict';

var movies = angular.module('movies', ['ngRoute']);


movies.controller('moviesCtrl' , function($scope, $http) {
	//$scope.moviedetails = ['moviename', 'movieyear'];
	$scope.$watchCollection('[moviename, movieyear]', function() {
  		fetch();
  	});

$scope.moviename= "";
$scope.movieyear = "";

function fetch(){
	if($scope.moviename!="" || $scope.movieyear!="")
	{
		if ($scope.movieyear == "") {
	  		$http.get("http://www.omdbapi.com/?t=" + $scope.moviename + "&tomatoes=true&plot=full")
	  	.	then(function(response){ $scope.details = response.data; });
  		}
  	//http://www.omdbapi.com/?t=the+godfather&y=1972&plot=short&r=json
  		else {
  			$http.get("http://www.omdbapi.com/?t=" + $scope.moviename + "&y=" + $scope.movieyear + "&tomatoes=true&plot=full")
	  		.then(function(response){ $scope.details = response.data; });
  		};
  	
  		$http.get("http://www.omdbapi.com/?s=" + $scope.moviename)
	  	.then(function(response){ $scope.related = response.data; });
	};	
}

$scope.Init = function(details)
    {
      console.log(details.Title);
      //$scope.percentObj = [{ "value":40,"color":"#F5A623" },{ "value":60,"color":"#F5A623"                }]
    }

$scope.update = function(movie){
  $scope.moviename = movie.Title;
  $scope.movieyear = movie.Year;
};

$scope.select = function(){
  this.setSelectionRange(0, this.value.length);
};

});




