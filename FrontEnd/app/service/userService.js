var errResponseHandler = function (res) {
    return {
        result: false,
        err: 'Server error:' + res.status
    };
};

blackboardApp.factory('userService', function ($http) {

    var userService = this;

    var host = "http://localhost:8080/api/v1";

    var student;

    this.signup = function(data) {
        console.log("signup");
        return $http.post(host + '/users', {
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
    
/*
    this.login = function(data) {
        console.log("login");
        return $http.get(host + '/users/' + data.email, {

        }).then(function(res){
            console.log(res);
            return res.data;
        }, errResponseHandler);
    }
*/

    var UIService = (function () {

        var applyTemplate = function (template, user) {
            return template 
                .replace(/\${name}/g, user.profile.name)
                .replace(/\${email}/g, user.email)
                .replace(/\${email-id}/g, emailToId(user.email))
                .replace(/\${color}/g, user.profile.color)
                .replace(/\${number}/g, user.profile.number);
        };

        var emailToId = function (email) { return email.replace("@","-").replace(".","-"); }

        var $wrapper = $("#wrapper");
        var currentUserTemplate = $("#current-user-template").html();
        var singleProfileTemplate = $("#single-profile-template").html();

        return {
            showCurrentUser: function (currentUser) {
                console.log("show");
                console.log(currentUser);
                $wrapper.html(applyTemplate(currentUserTemplate, currentUser));
            },
            showAllProfiles: function (profiles) {
                //TODO: this assumes that current user template has been redered. :(
                var html = profiles.map(function (p) {
                    return applyTemplate(singleProfileTemplate, p);
                }).reduce(function (p, c) {
                    return p + c;
                });
                $("#profile-list").html(html);
            },
            showCompatibility: function (targetUser, score) {
                //write the DOM manipulation to reflect
                var email = emailToId(targetUser.email); //TODO: repeated code from line 120. Factor out
                var x = $("#score-" + email);
                console.log(x, score);
                x.html(""+score);
            }
        };
    }());


    var BlackboardService = (function() {
        var user, auth;
        var REST_SERVER = "http://localhost:8080/";
        var USER_ENDPOINT = "api/v1/users";
        var service = {
            setCurrentUser: function(u) {
                console.log("set");
                user = u;
            },

            getAllProfiles: function () {
                console.log("get");
                return $.ajax({
                    type: "GET",
                    url: REST_SERVER + USER_ENDPOINT,
                    dataType: "json",
                    contentType: "application/json",
                    headers: { "Authorization": auth }
                });
            },

            getUser: function(email) {
                console.log("log1");
                console.log(email);
                return $.ajax({
                    type: "GET",
                    url: REST_SERVER + USER_ENDPOINT + "/" + email,
                    dataType: "json",
                    contentType: "application/json",
                    headers: { "Authorization": auth }
                });
            },

            login: function(email, pw) {
                console.log("log");
                console.log(email);
                console.log(pw);
                auth = "Basic " + window.btoa(unescape(encodeURIComponent(email + ":" + pw)));
                console.log(auth);
                return service.getUser(email).done(function(u) {
                    console.log(u);
                });
            }
        };
        return service;
    }());

    this.login = function(data) {
        console.log("login");
        return BlackboardService.login(data.email, data.password)
            .then(function(user){
                console.log(user);
                if (user) {
                    student = user;
                    return true;
                } else {
                    return false;
                }
                
/*
                BlackboardService.setCurrentUser(user);
                UIService.showCurrentUser(user);
                BlackboardService.getAllProfiles().done(function (profiles) {
                    UIService.showAllProfiles(profiles);
                });
*/
            })
            .fail(function (result) {
                console.log(arguments);
            });
            
    }

    this.getStudent = function(){
        return student;
    }

    this.changeProfile = function(data){
        console.log(data);
        return $http.put(host + '/students/' + data.email, {
            email: data.email,
            password: data.password,
            firstName: data.firstName,
            lastName: data.lastName,
            schoolId: data.schoolId
        }).then(function(res){
            console.log(res);
            return res.data;
        }, errResponseHandler);
    }

    return userService;
});