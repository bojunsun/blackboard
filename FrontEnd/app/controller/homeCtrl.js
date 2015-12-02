blackboardApp.controller('HomeController', function ($scope, userService) {
	
	$scope.status = 'login';
	$scope.isStudent;
    $scope.setStatus = function(status){
        $scope.status = status;
    };
    $scope.getStatus = function(){
        return $scope.status;  
    };

    $scope.student = new Student;

    $scope.doSignup = function (){
    	if ($scope.isStudent == "false") {
	    	$scope.student.isStudent = false;
	    }
	    
		console.log($scope.student);

		userService.signup($scope.student).then(function(res) {
			console.log(res);
		})

	}
});
