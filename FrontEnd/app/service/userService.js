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
            username: data.username
        }).then(function(res) {
            console.log(res);
            return res.data;
        }, errResponseHandler);
    }
    
    return userService;
});