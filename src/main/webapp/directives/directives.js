angular.module("myApp", [])
    .directive("crossFade", function() {
        return {
            restrict: 'A',
            template: "<div ng-transclude></div>",
            transclude:true,

            link: function (scope, elem, attrs) {

                console.log("Linking: " + elem)

                var images = elem.find("img");

                var current = 0;

                for(var i = 0; i < images.length; i++) {
                    images[i].style.opacity = i == 0 ? 1 : 0;
                }

                function advance() {

                    images[current].style.opacity = 0;

                    current++;
                    if(current == images.length) {
                        current = 0;
                    }

                    images[current].style.opacity = 1;

                    setTimeout(advance, 1000);
                }

                setTimeout(advance, 1000);
            }
        }
    })