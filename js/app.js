var app = angular.module('players', ['ngRoute']);

	app.config(function($routeProvider, $locationProvider) {
		$routeProvider
		  .when('/', {
			templateUrl: 'partials/details.html',
			controller: 'playerDetail'
		  })
		  .otherwise( {redirectTo: '/'} )
	});


	app.controller('playersDetail', {
    templateUrl: 'partials/detail.html',
    controller: function PlayerDetailController($scope,$http){

        $http.get('data/players.json').success(function() {
          $scope.players = data;
        }).
        error(function(data, status, headers, config) {
          // log error
            console.log("error");
        });
    }
	});
