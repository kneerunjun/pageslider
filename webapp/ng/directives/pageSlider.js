
(function () {
    var pageSlider = angular.module("myApp").directive("pageSlider", function () {
        return {
            restrict: "E",
            replace: true,
            scope: {
                //ex: [1,2,3,4,5..]
                totalpages: "=",
                //ex:1
                currentpage: "=",
                gotopage: "&"
            },
            templateUrl: "ng/templates/pageSlider.html",
            link: function (scope, elem, attrs) { },
            controller: function ($scope) {

                var renderpagenav = function () {
                    console.log($scope.currentpage);
                    console.log($scope.totalpages);
                    if ($scope.totalpages == null) {
                        if ($scope.currentpage == 1) {
                            $scope.nomoreleft = true;
                            $scope.nomoreright = true;
                        }
                    }
                    else {
                        $scope.nomoreleft = $scope.totalpages.length == 0 ? true : $scope.currentpage == $scope.totalpages[0] ? true : false;
                        $scope.nomoreright = $scope.totalpages.length == 0 ? true : $scope.nomoreright = $scope.currentpage == $scope.totalpages[$scope.totalpages.length - 1] ? true : false;
                    }
                    console.log("nomoreleft: " + $scope.nomoreleft);
                    console.log("no more right" + $scope.nomoreright);
                }

                $scope.$watch("currentpage", function () {
                    console.log("watch expression currentpage....");
                    renderpagenav();
                });
                $scope.$watch("totalpages", function () {
                    console.log("watching expression total pages");
                    renderpagenav();
                })
                console.log("nomoreleft status:" + $scope.nomoreleft);
                console.log("nomoreright status: " + $scope.nomoreright);

                $scope.moveleft = function () {

                    if (!$scope.nomoreleft) {
                        $scope.currentpage = $scope.totalpages[$scope.totalpages.indexOf($scope.currentpage) - 1];
                        $scope.gotopage({ page: $scope.currentpage });
                    }
                }
                $scope.moveright = function () {

                    if (!$scope.nomoreright) {
                        $scope.currentpage = $scope.totalpages[$scope.totalpages.indexOf($scope.currentpage) + 1];
                        $scope.gotopage({ page: $scope.currentpage });
                    }
                }
                //this watch would determine when the nav buttons have to be disabled
            }
        }
    })
})();
