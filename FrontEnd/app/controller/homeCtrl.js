blackboardApp.controller('HomeController', function ($scope) {
	
	$scope.status = 'login';
    $scope.setStatus = function(status){
        $scope.status = status;
    };
    $scope.getStatus = function(){
        return $scope.status;  
    };
});
