app.controller('eventdetailController', function ($scope, $routeParams, newsfeed) {
    /* $resource GET(by id) api which returns one newsfeed item where the _id corresponds to the item_id passed in*/
    $scope.event = newsfeed.get({item_id: $routeParams.id});
});