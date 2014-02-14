angular.module("CalcApp", [])
    .controller("CalcController", function ($scope) {
        $scope.a = 100;
        $scope.b = 100;

        $scope.operations = [
            {
                name: "Sum",
                operator: function (a, b) {
                    return parseInt(a) + parseInt(b);
                }
            },
            {
                name: "Difference",
                operator: function (a, b) {
                    return parseInt(a) - parseInt(b);
                }
            },
            {
                name: "Product",
                operator: function (a, b) {
                    return parseInt(a) * parseInt(b);
                }
            },
            {
                name: "Quotient",
                operator: function (a, b) {
                    return parseInt(a) / parseInt(b);
                }
            },
            {
                name: "Diagonal",
                operator: function (a, b) {
                    return Math.sqrt(Math.pow(parseInt(a), 2) + Math.pow(parseInt(b),2));
                }
            }
        ];


    }).directive("calcSquare", function() {
        console.log("calcSquare")
        return {
            template: "<div class='boxlabel a' style='margin-left:{{width/2}}px'>a</div> <div class='boxlabel b' style='margin-top:{{height/2-7}}px'>b</div>",
            link: function(scope, elem, attrs) {
                var maxWidth = parseInt(attrs.maxWidth) || 200;
                var maxHeight = parseInt(attrs.maxHeight) || 200;

                function updateSize() {
                    var width = scope.a;
                    var height = scope.b;
                    if(width > maxWidth) {
                        height = height * (maxWidth/width);
                        width = maxWidth;
                    }
                    if(height > maxHeight) {
                        width = width* (maxHeight/height);
                        height= maxHeight;
                    }
                    scope.width = width;
                    scope.height = height;

                    elem.css("width", width +"px");
                    elem.css("height", height +"px");

                }

                scope.$watch(attrs.width, updateSize);
                scope.$watch(attrs.height, updateSize);
            }
        }
    })