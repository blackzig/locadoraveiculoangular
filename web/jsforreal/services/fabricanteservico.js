app.service('FabricanteServico',['$http', '$q', function($http, $q){
   var servico = {};
   
   servico.adicionarFabricante = function(fabricante){
       console.log("serviço fabricante "+fabricante);
//     var deferred = $q.defer();
//     $http({
//        method: 'POST',
//        url: "/locadoraveiculo/rest/fabricante/inserirFabricante",
//        data: fabricante
//     }).then(function(response){
//        deferred.resolve(response); 
//     }, function(response){
//       deferred.reject(response);  
//     });
//     return deferred.promise;
   };

    
}]);


