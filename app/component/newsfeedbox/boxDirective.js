app.directive('newsfeedBox', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/component/newsfeedbox/boxView.html',
        controller: 'boxController'
    };
});
