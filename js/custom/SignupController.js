(function(){
    var app = angular.module("myApp");
    
    var SignupController = function($scope){
        $scope.welcome = "Welcome to the future..";
    };
    
    app.controller("SignupController",['$scope',SignupController])
})();