app.factory('newsfeed', function newsfeedFactory($resource) {
    /* use $resource to communicate with the mock $httpBackEnd e2e server */
    /* api server is stored in assets/api/newsfeed */
    return $resource("/api/newsfeed/:item_id", {item_id: '@_id'}, {});
});

