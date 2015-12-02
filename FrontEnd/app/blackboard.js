//define the global school
var GlobalSchool = ["The George Washington University", "George Mason University", "Georgetown University", "Moses University"];


function User() {
    this.firstName = "";
    this.lastName = "";
    this.email = "";
    this.password = "";
    this.schoolId = 0;
}

function Student() {
    User.call(this);
    this.isStudent = 1;
    //isStudent is true means it's a student or it's a instructor.
}
Student.prototype = Object.create(User.prototype);


var blackboardApp = angular.module('blackboardApp', ['ui.router']);

blackboardApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider.state('home', {
        url: '/home',
        templateUrl: '/app/view/home.html',
        controller: 'HomeController'
    });
    $stateProvider.state('signup', {
        url: '/signup',
        templateUrl: '/app/view/signup.html',
        controller: 'SignupController'
    });
});



blackboardApp.directive('footer', function() {
    return {
        restrict: 'A', //This menas that it will be used as an attribute and NOT as an element. I don't like creating custom HTML elements
        replace: true,
        scope: {}, // This is one of the cool things :). Will be explained in post.
        templateUrl: "/app/view/footer.html",
        controller: FooterController       
    };
    function FooterController($window,$scope){
        
        
    };
});