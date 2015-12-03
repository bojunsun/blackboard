blackboardApp.controller('CourseController', function ($scope, userService) {
	$scope.test = "page";
	console.log(userService.getStudent());
    
});