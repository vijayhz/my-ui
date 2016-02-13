(function(){
    var app = angular.module("myApp");
    
    var SignupController = function($scope, $location, $http){
        $scope.welcome = "Welcome to the signup page...";
        
        $scope.signup = function(user){
            console.log(user.userName+"::"+user.userEmail+"::"+user.password);
            
            $http.post("http://localhost:8080/signup", user);
        };
    };
    
    app.controller("SignupController",['$scope', '$location', '$http',SignupController])
})();