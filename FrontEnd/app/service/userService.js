var errResponseHandler = function (res) {
    return {
        result: false,
        err: 'Server error:' + res.status
    };
};

blackboardApp.factory('userService', function ($http) {

    var userService = this;

    var host = "http://api.hereseas.com";

    this.signup = function(data) {
        console.log("signup");
        return $http.post(host + '/user', {
            email: data.email,
            password: data.password,
            firstName: data.firstName,
            lastName: data.lastName,
            schoolId: data.schoolId,
            isStudent: data.isStudent
        }).then(function(res) {
            console.log(res);
            return res.data;
        }, errResponseHandler);
    }
    

    this.login = function(data) {
        console.log("login");
        return $http.post(host + '/login', {
            email: data.email,
            password: data.password
        }).then(function(res){
            console.log(res);
            return res.data;
        }, errResponseHandler);
    }

    return userService;
});