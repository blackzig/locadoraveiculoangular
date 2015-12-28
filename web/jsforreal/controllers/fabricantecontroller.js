app.controller('FabricanteController', function ($scope, $http) {

    $scope.fabricante = {};
    $scope.mensagem = '';

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

//    $scope.salvarFabricante = function (fabricante) {
//        console.log("fabricante: " + $scope.fabricante.nome);
//        FabricanteServico.adicionarFabricante(fabricante).then(sucessoSalvar, erroSalvar);
//    };
//    
//    var sucessoSalvar = function(data){
//      console.log("salvar OK "+data);  
//    };
//    
//    var erroSalvar = function(data){
//      console.log("erro ao salvar "+data);   
//    };

});

