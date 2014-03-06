angular.module("CalcApp", [])
    .controller("CalcController",function ($scope) {
        $scope.a = 180;
        $scope.b = 80;
        $scope.c = "c";

        $scope.operations = [
            {
                name: "Sum",
                operator: function (a, b) {
                    return a + b;
                }
            },
            {
                name: "Difference",
                operator: function (a, b) {
                    return a-b
                }
            },
            {
                name: "Product",
                operator: function (a, b) {
                    return a * b;
                }
            },
            {
                name: "Quotient",
                operator: function (a, b) {
                    if(b == 0) {
                        return Infinity;
                    }
                    return a / b;
                }
            },
            {
                name: "Diagonal",
                operator: function (a, b) {
                    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
                }
            }
        ];


    }).directive("calcSquare", function () {
        return {
            restrict: 'E',
            scope: {
                a: "=a",
                b: "=b"
            },
            template: "<div class='squarelabel a' style='margin-left:{{width/2}}px'>a</div> <div class='squarelabel b' style='margin-top:{{height/2-7}}px'>b</div>",

            link: function (scope, elem, attrs) {

                var maxWidth = parseInt(attrs.maxwidth) || 200;
                var maxHeight = parseInt(attrs.maxheight) || 200;

                function updateSize() {
                    var width = scope.a;
                    var height = scope.b;
                    if (width > maxWidth) {
                        height = height * (maxWidth / width);
                        width = maxWidth;
                    }
                    if (height > maxHeight) {
                        width = width * (maxHeight / height);
                        height = maxHeight;
                    }

                    scope.width = width;
                    scope.height = height;


                    elem.css("width", width + "px");
                    elem.css("height", height + "px");

                }

                scope.$watch(attrs.a, updateSize);
                scope.$watch(attrs.b, updateSize);
            }
        }
    })
    .directive("calcPositiveInteger", function() {
        return {
            require:"ngModel",
            link: function(scope, elem, attrs, ngModel) {
                ngModel.$parsers.unshift(function(value) {

                    try {
                        var num = parseInt(value);

                        if(num < 0 || num.toString() !== value) {
                            ngModel.$setValidity('positiveNumber', false);
                            return undefined;
                        } else {
                            ngModel.$setValidity('positiveNumber', true);
                            return num;
                        }
                    } catch (e) {
                        ngModel.$setValidity('isNumber', false);
                        return undefined;
                    }
                });
            }
        }
    });

