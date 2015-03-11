app.controller('createController', function ($scope, newsfeed) {
    /* trigger for the select options */
    $scope.showoption = false;
    $scope.formdata = {};

    /* options for the dropdown menu */
    $scope.createactions = [
        {type: 'event'},
        {type: 'post'}
    ];

    $scope.clearform = function () {
        $scope.formdata = {};
    };

    $scope.submit = function (newitem) {
        /* create the action attribute */
        newitem.action = $scope.myactiontype.type + "::created";
        /* $resource POST api */
        newsfeed.save(newitem, function () {
            /* Refresh the newsfeed after creating new items */
            $scope.newsfeed = newsfeed.query();
        });
        $scope.formdata = {};
    }
});