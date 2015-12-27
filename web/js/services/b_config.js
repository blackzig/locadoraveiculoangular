app.config(function ($routeProvider) {

    $routeProvider
            .when('/',
                    {
                        templateUrl: "partials/home.html"
                    })
            .when('/films',
                    {
                        templateUrl: "partials/films.html"
                    })
            .when('/characters',
                    {
                        templateUrl: "partials/characters.html"
                    })
            .otherwise({
                redirectTo: "/",
                templateUrl: "partials/home.html"
            });
});
