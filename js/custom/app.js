(function(){
    var app = angular.module("myApp",['ngRoute']);
    
    app.config(function($routeProvider){
        $routeProvider
        .when("/home",{
            templateUrl:"template/home.html",
            controller:"HomeController"
        })
        .when("/login",{
            templateUrl:"template/login.html",
            controller:"LoginController"
        })
        .when("/signup",{
            templateUrl:"template/signup.html",
            controller:"SignupController"
        })
        .otherwise({redirectTo:"/login"});
    });
    
})();