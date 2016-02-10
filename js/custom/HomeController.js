(function(){
    var app = angular.module("myApp");
    
    var HomeController = function($scope){
        $scope.welcome = "Welcome to the Home page...";
    };
    
    app.controller("HomeController",['$scope',HomeController])
})();