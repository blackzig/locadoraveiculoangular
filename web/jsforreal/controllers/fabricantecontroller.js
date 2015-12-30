app.controller('FabricanteController', function ($scope, $http) {

    $scope.fabricante = {};
    $scope.busca = {};
    $scope.mensagem = '';
    $scope.fabricantes = [];

    $scope.salvarFabricante = function () {
        if ($scope.formFabricante.$valid) {
            console.log("fabricante: " + $scope.fabricante.nome);
            $http.post('/locadoraveiculo/rest/fabricante/inserirFabricante', $scope.fabricante)
                    .success(function () {
                        $scope.fabricante = {};
                        $scope.mensagem = "Fabricante incluído com sucesso.";
                    })
                    .error(function (erro) {
                        $scope.mensagem = "Não foi possível incluir fabricante.";
                        console.log(erro);
                    });
        }
        else {
            $scope.mensagem = "Vai gravar coisa errada na zona";
        }

    };

    $scope.buscarFabricante = function () {
        if (!$scope.busca.nome) {
            $http.get('/locadoraveiculo/rest/fabricante/todos')
                    .success(function (fabricantes) {
                        $scope.fabricantes = fabricantes;
                        //$scope.mensagem = "Resultados encontrados.";
                    })
                    .error(function (erro) {
                        $scope.mensagem = "Não foi possível realizar a pesquisa.";
                        console.log(erro);
                    });
        }
        else {
            console.log("busca " + $scope.busca.nome);
        }

    };

    $scope.pesquisaFabricantes = function () {
        location.href = '#/pesquisa-fabricantes';
    };



});

