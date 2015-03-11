/* 3 dependencies were injected: ngRoute, ngResource and ngMockE2E */
var app = angular.module('newsfeedapp', ['ngRoute', 'ngResource', 'ngMockE2E']);

/* call interceptor to modify outgoing POST data */
app.config(function ($httpProvider) {
    $httpProvider.interceptors.push(function () {
        return {
            request: function (req) {
                if (req.method == "POST") {
                    /* we created this _id to allow the mock database to get item by id */
                    req.data._id = Math.random().toString(36).substr(2, 9);
                    req.data.actor = "Zachary Nevin";
                    /* optional */
                    req.data.created_at = new Date();
                }
                return req;
            }
        };
    });
});





