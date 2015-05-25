/**
 * Created by ngromov on 25.05.15.
 */

var myApp = angular.module('myApp',['ngSanitize']);
var model  =  [{
    name: 'Nokia',
    phone:[{
        name: "Nokia Lumia 530",
        price: 150
    },{
        name: "Nokia X2",
        price: 200
    }]
},{
    name: 'Samsung',
    phone:[{
        name: "Samsung Galaxy S5",
        price: 500
    },{
        name: "Samsung Galaxy Alpha",
        price: 400
    }]
}]
var tablets = [{
    name: 'Samsung Galaxy Tab S4',
    year: 2014,
    price: 300,
    company: 'Samsung'
},{
    name: 'LG G PAD 8.3',
    year: 2013,
    price: 180,
    company: 'LG'
},{
    name: 'IdeaTab A8',
    year: 2014,
    price: 220,
    company: 'Lenovo'
}];

myApp.controller('phoneController',function($scope){
    $scope.model = model;
$scope.tablets = tablets;
    $scope.data ={};
    $scope.setFile = function(){

        if($scope.data.mode=='Tablets'){

            return 'tabletList.html';
        }else if($scope.data.mode=='Phones'){
            return 'phoneList.html';
        }
    };
    $scope.modes = [{
        value:'Tablets',
        label:'Планшеты'
    },{
        value:'Phones',
        label:'Телефоны'
    }];


$scope.htmlcode = "Directive <b>ng-bind-html</b>";

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