app.directive('menu', function () {
    return{
        restrict : 'E',
        transclude: true,
        templateURL: 'partials/menu.html'
    };
});
