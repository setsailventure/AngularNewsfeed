app.controller('itemController', function ($scope) {
    /* extract the type of action */
    var actionitem = $scope.item.action;
    /* identify the object type for dynamic controller */
    $scope.objecttype = actionitem.substr(0, actionitem.indexOf('::'));
});