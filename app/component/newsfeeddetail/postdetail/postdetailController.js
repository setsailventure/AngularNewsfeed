app.controller('postdetailController', function ($scope, $routeParams, newsfeed) {
    /* $resource GET(by id) api which returns one newsfeed item where the _id corresponds to the item_id passed in*/
    $scope.post = newsfeed.get({item_id: $routeParams.id});
});