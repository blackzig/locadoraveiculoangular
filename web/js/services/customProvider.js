app.provider("box", function () {

    var hex;
    return{
        setColor: function (value) {
            hex = value;
        },
        $get: function () {
            return{
                color: hex
            };
        }
    };
})
        .config(function (boxProvider) {
            boxProvider.setColor("#ff0000");
        })
        .controller("AppCtrl", function ($scope, $injector) {
            $injector.invoke(function (box) {
                $scope.color = box.color;
                console.log($scope.color);
            });

        });

    