blackboardApp.controller('CourseController', function ($scope, userService, $state) {
	$scope.test = "page";
	console.log(userService.getStudent());
	$scope.curStudent = userService.getStudent();
	$scope.curSchool = GlobalSchool[$scope.curStudent.schoolId - 1];
	console.log($scope.curSchool);
	$scope.changeProfile = function() {
		console.log("change");
		$state.go('signup');
	}
    
});