/**
 * Created by ngromov on 25.05.15.
 */

var myApp = angular.module('myApp',[]);
var model  = [
    {
        name:"Nokia",
        year: 2014,
        price:200,
        company:{
            name:'Nokia',
            country:"Finland"
        }
    },{
        name:"Philips",
        year: 2012,
        price:50,
        company:{
            name:'Philips',
            country:"China"
        }
    },{
        name:"Samsung",
        year: 2015,
        price:650,
        company:{
            name:'Samsung',
            country:"Korea"
        }
    }

];

myApp.controller('phoneController',function($scope){
    $scope.model = model


});
myApp.controller('myControl',function(){
    this.message = "hello World"
    this.text = "control without Scope"
});
myApp.controller('secondController',function(){
   this.message =[1,2,3]
});
myApp.controller('thirdController', function () {
   this.message= {
       x:{
           one:1
       },
       y:{
           two:2
       }
   }
});