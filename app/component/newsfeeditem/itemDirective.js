app.directive('newsfeedItem', function () {
    return{
        restrict: 'E',
        templateUrl: 'app/component/newsfeeditem/itemView.html',
        controller: 'itemController'
    }
});

