angular.module('contatooh').controller('ContatosController',
  function($scope, Contato) {
    
    $scope.contatos = [];
    
    $scope.filtro ='';
  
    $scope.mensagem = {texto:''};  
    
    function buscaContatos(){
      Contato.query(
        function(contatos){
          $scope.contatos = contatos;
        },
        function(erro){
          $scope.mensagem={texto:"Não foi possível obter a lista de contatos"};
          console.log(erro);
        }
      );
    }
    
    $scope.remove = function(contato){
      Contato.delete({id: contato._id},
        buscaContatos,
        function(erro){
          $scope.mensagem = {texto:'Não foi possível remover o contato'};
          console.log(erro);
        }
      );  
    };
    buscaContatos();
});
