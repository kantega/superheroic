angular.module("myApp", [])
    .controller("HeroesController", function  HeroesController($scope, $http) {

        $http({method: 'GET', url: 'superheroes.json'}).
            success(function(data, status, headers, config) {
                $scope.heroes = data;
            }).
            error(function(data, status, headers, config) {});

    });
