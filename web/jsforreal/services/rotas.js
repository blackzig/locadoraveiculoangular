app.config(function ($routeProvider) {

    $routeProvider
            .when('/',
                    {
                        templateUrl: "partialsforreal/home.html"
                    })
            .when('/fabricantes',
                    {
                        templateUrl: "partialsforreal/fabricantes.html"
                    })
            .when('/characters',
                    {
                       // templateUrl: "partials/characters.html"
                    })
            .otherwise({
                redirectTo: "/",
                templateUrl: "partials/home.html"
            });
});