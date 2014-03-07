angular.module("myApp", [])
    .controller("HeroesController", function  HeroesController($scope, $http) {

        $http.get("superheroes.json").success(function(data) {
            $scope.heroes = data;
            console.log("Setting on scope");

        });


    });
