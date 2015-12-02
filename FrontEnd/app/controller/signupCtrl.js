blackboardApp.controller('SignupController', function ($scope, userService) {
	$scope.student = new Student;
	console.log($scope.student);
	$scope.signupData = {};
	$scope.signupData.isStudent = true;
	$scope.doSignup = function (){
		console.log($scope.student);

		userService.signup($scope.student).then(function(res) {
			console.log(res);
		})

	}
    
});