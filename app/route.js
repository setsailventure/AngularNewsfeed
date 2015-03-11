app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            /* dynamic route by id */
            when('/event/:id', {
                templateUrl: 'app/component/newsfeeddetail/eventdetail/eventdetailView.html',
                controller: 'eventdetailController'
            }).
            /* dynamic route by id */
            when('/post/:id', {
                templateUrl: 'app/component/newsfeeddetail/postdetail/postdetailView.html',
                controller: 'postdetailController'
            }).
            otherwise({
                redirectTo: ''
            });
    }
]);