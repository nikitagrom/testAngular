/**
 * Created by ngromov on 25.05.15.
 */
var app = angular.module('thirdApp',[]).run(function($rootScope){
    $rootScope.moduleName ="myApp";
    $rootScope.message = "Hello AngularJS"
});
app.controller('myController',function($scope){
    $scope.message= "hi"
});