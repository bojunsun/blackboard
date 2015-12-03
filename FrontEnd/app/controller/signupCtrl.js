blackboardApp.controller('SignupController', function ($scope, userService) {
	//$scope.student = new Student;
	$scope.student = userService.getStudent();
	console.log($scope.student);
	
	$scope.changePro = function (){
		console.log($scope.student);

		userService.changeProfile($scope.student).then(function(res) {
			console.log(res);
		})

	}
    
});