
var model = {
    items :[
        { purchase: "Хлеб", done: false, price: 15.9 },
        { purchase: "Масло", done: false, price: 60 },
        { purchase: "Картофель", done: true, price: 22.6 },
        { purchase: "Сыр", done: false, price:310 }
    ]
};
var backUp =JSON.parse(JSON.stringify(model));
var purchaseApp = angular.module("purchaseApp", []);
purchaseApp.controller("purchaseController", function ($scope) {
    $scope.list = model;
    $scope.addItem = function (text, price) {
        if(text && price) {
            $scope.list.items.push({purchase: text, price: price, done: false});
        }
    };
    $scope.removeItems = function(){
        var tmp=[];
        for(var i = 0;i<$scope.list.items.length;i++) {
            if ($scope.list.items[i].done) {
                continue;
            }
            tmp.push($scope.list.items[i])
        }
        $scope.list.items = tmp;
    };
    $scope.removeAll = function(){
      $scope.list.items = [];
    }
$scope.restoreDefault = function(){
    $scope.list.items = backUp.items;
}

});

