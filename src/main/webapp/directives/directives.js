angular.module("myApp", [])
    .directive("crossFade", function() {
        return {
            restrict: 'A', // Directive is matched
            transclude:true,
            template: "<div ng-transclude></div>", // "transclude" means something like "put the content I'm wrapping here"

            link: function (scope, elem, attrs) {

                // Add Javascript which initially sets style.opacity of all images to 0,
                // then to 1 for the duration of the currently active image
                // Feel free to steal the code from directives.html and use that as a starting point.


            }
        }
    })