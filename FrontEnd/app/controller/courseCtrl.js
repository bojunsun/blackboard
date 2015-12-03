blackboardApp.controller('CourseController', function ($scope, userService, $state) {
	$scope.test = "page";
	console.log(userService.getStudent());
	$scope.course = userService.getCurCourse();
	console.log($scope.course);

	$scope.curStudent = userService.getStudent();
	$scope.curSchool = GlobalSchool[$scope.curStudent.schoolId - 1];
	$scope.isStudent = $scope.curStudent.isStudent;

	console.log($scope.curSchool);
	$scope.changeProfile = function() {
		console.log("change");
		$state.go('signup');
	}

	
    
});