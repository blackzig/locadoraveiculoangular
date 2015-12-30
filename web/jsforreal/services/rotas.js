app.config(function ($routeProvider) {

    $routeProvider
            .when('/',
                    {
                        templateUrl: "partialsforreal/home.html"
                    })
            .when('/fabricantes',
                    {
                        templateUrl: "partialsforreal/fabricantes.html",
                        controller: "FabricanteController"
                    })
            .when('/pesquisa-fabricantes',
                    {
                        templateUrl: "partialsforreal/pesquisa-fabricantes.html",
                        controller: "FabricanteController"
                    })
            .otherwise({
                redirectTo: "/",
                templateUrl: "partialsforreal/home.html"
            });
});