app.directive("homedirective", [function () {
        return{
            restrict: 'E',
            controller: 'homecontroller',
            link: function (scope, elm, attrs) {
                console.log("homedirective");
            }
        };
    }]);
