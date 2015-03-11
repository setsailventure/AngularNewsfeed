app.controller('boxController', function ($scope, $http, newsfeed) {
    /* newsfeed is the variable to store all newsfeed */
    $scope.newsfeed = [];

    /* $resource get all api */
    $scope.newsfeed = newsfeed.query();
});