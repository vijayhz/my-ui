(function(){
    var app = angular.module("myApp");
    
    var LoginController = function($scope, $location){
        
        $scope.welcome = "Welcome to the login page";
        
        $scope.login = function(user) {
            
            if(user.username=='vinay' && user.password=='vinay'){
                $location.path("/home");
            } 
            
        };
    };
    
    app.controller("LoginController",['$scope','$location',LoginController])
})();