blackboardApp.controller('CourseController', function ($scope, userService, $state) {
	$scope.test = "page";
	console.log(userService.getStudent());

	$scope.changeProfile = function() {
		console.log("change");
		$state.go('signup');
	}
    
});