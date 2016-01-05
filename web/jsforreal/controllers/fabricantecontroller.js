app.controller('FabricanteController', function ($scope, $http, $routeParams, $window) {

    $scope.fabricante = {};
    $scope.busca = {};
    $scope.mensagem = '';
    $scope.fabricantes = [];

//usado na edição de fabricante
    if ($routeParams.idFabricante) {
        $http.get('/locadoraveiculo/rest/fabricante/unico/' + $routeParams.idFabricante)
                .success(function (fabricantes) {
                    $scope.fabricante = fabricantes;
                    console.log("fabricantes " + fabricantes);
                })
                .error(function (erro) {
                    $scope.mensagem = "Não foi possível realizar a pesquisa.";
                    console.log(erro);
                });
    }


    $scope.salvarFabricante = function () {
        if ($scope.formFabricante.$valid) {
            console.log("fabricante: " + $scope.fabricante.nome);
            $http.post('/locadoraveiculo/rest/fabricante/inserirFabricante', $scope.fabricante)
                    .success(function () {
                        $scope.fabricante = {};
                        $scope.mensagem = "Tarefa executada com sucesso.";
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
            $scope.mensagem = '';
            $http.get('/locadoraveiculo/rest/fabricante/todos')
                    .success(function (fabricantes) {
                        $scope.fabricantes = fabricantes;
                    })
                    .error(function (erro) {
                        $scope.mensagem = "Não foi possível realizar a pesquisa.";
                        console.log(erro);
                    });
        }
        else {
            console.log("busca " + $scope.busca.nome);
            $scope.fabricantes = [];
            $http.get('/locadoraveiculo/rest/fabricante/todos/' + $scope.busca.nome)
                    .success(function (fabricantes) {
                        $scope.fabricantes = fabricantes;
                        console.log("fabricantes tamanho " + $scope.fabricantes.length);

                        if ($scope.fabricantes.length === 0) {
                            $scope.mensagem = "Nenhum resultado encontrado.";
                        }
                        else {
                            $scope.mensagem = '';
                        }

                    })
                    .error(function (erro) {
                        $scope.mensagem = "Não foi possível realizar a pesquisa.";
                        console.log(erro);
                    });
        }

    };

    $scope.excluirFabricante = function (fabricante) {
        if ($window.confirm('Tem certeza que deseja excluir este registro?')) {
            $http.delete('locadoraveiculo/rest/fabricante/remove/' + fabricante.codigo)
                    .success(function () {
                        var indice = $scope.fabricantes.indexOf(fabricante);
                        $scope.fabricantes.splice(indice, 1);
                        $scope.mensagem = 'Fabricante ' + fabricante.nome + ' removido com sucesso!';

                    })
                    .error(function (erro) {
                        console.log(erro);
                        $scope.mensagem = 'Não foi possível excluir o fabricante ' + fabricante.nome;
                    });
        }
    };

//botão pesquisa no formulário de fabricante
    $scope.pesquisaFabricantes = function () {
        location.href = '#/pesquisa-fabricantes';
    };

//botão de editar fabricante
    $scope.editarFabricante = function (fabricante) {
        location.href = '#/fabricantes/' + fabricante.codigo;
    };


});

