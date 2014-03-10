angular.module("myApp", ["ngRoute"])

    .config(function ($routeProvider) {
        $routeProvider.
            when('/register', {
                templateUrl: 'partials/register.html',
                controller: 'RegistrationController'
            }).
            when('/heroes', {
                templateUrl: 'partials/heroes.html',
                controller: 'HeroesController'
            }).
            otherwise({
                redirectTo: '/heroes'
            });
    })
    .controller("RegistrationController", function($scope, $http, $location) {
        $scope.register = function(reg) {
            $http.post("../forms/register", reg).success(function() {
                alert("Thank you, " + reg.name + " is now registered!")
                $location.path("/heroes");
            });
        }
    })
    .controller("HeroesController", function($scope, $http) {

        $http.get("../http/superheroes.json").success(function(data) {
            $scope.heroes = data;
        });

    });

