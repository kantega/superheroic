angular.module("myApp", [])
    .controller("RegistrationController", function  HeroesController($scope, $http) {

        $scope.registration = {};

        $scope.register = function(registration) {
            $http.post("register", registration).success(function(data) {
                console.log("Success: " + data)
            });

        }
    });
