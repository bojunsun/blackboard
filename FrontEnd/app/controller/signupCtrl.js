blackboardApp.controller('SignupController', function ($scope, userService) {
	$scope.signupData = {};
	$scope.signupData.isStudent = true;
	$scope.doSignup = function (){
		console.log($scope.signupData);

		userService.signup($scope.signupData).then(function(res) {
			console.log(res);
		})

	}
    
});