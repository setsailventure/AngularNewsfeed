app.directive('newsfeedCreate', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/component/newsfeedcreate/createView.html',
        scope: {
            newsfeed: "="
        },
        controller: 'createController'
    };
});

