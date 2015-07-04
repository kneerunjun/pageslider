(function () {
    var itemsController = angular.module("myApp").controller("itemsController",
        function ( $scope) {
                $scope.itemsPerPage = 3;
                $scope.items = [
                    { id: 1, title: "Yonex shirt- blue", qty:2},
                    { id: 2, title: "Yonex BG 65 strings", qty: 3 },
                    { id: 3, title: "Li Ning N101 strings", qty: 3 },
                    { id: 4, title: "Yonex over grip-lime", qty: 10 },
                    { id: 5, title: "Yonex base grip-magenta", qty: 10 },
                    { id: 6, title: "Yonex Arc saber 002", qty: 1 },
                ];
                $scope.currpage = 1;
                $scope.totalpages = [];
                
                var calcpages = function () {
                    var countpages = $scope.items.length % $scope.itemsPerPage == 0 ?
                     $scope.items.length / $scope.itemsPerPage :
                     ($scope.items.length / $scope.itemsPerPage) + 1;
                    var pageindices = [];
                    for (var i = 1; i <= countpages; i++) {
                        pageindices.push(i);
                    };
                    $scope.totalpages = pageindices;//changing the watched variable
                }
                calcpages();
                $scope.gotopage = function (page) {
                    console.log("received request to move to page : " + page);
                    if (page <= $scope.totalpages.length) {
                        console.log("reporteesController: we are now moving to the page : " + page);
                        $scope.currpage = page;
                        //and this should ideally change the filter and update the records
                    }
                };
            }
        )
})();