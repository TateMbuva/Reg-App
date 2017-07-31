

angular.module('regapp').controller('forms', function ($scope, $timeout, formsDB) {


  formsDB.getForms().then(function(data){
          $scope.formss = data;
          //console.log(data);
      });


    setInterval(function(){

      formsDB.getNum().then(function(data){
            $scope.num = data;
      });

    }, 3000);






    $scope.skipF = function(){

      formsDB.skipFF().then(function(data){
              $scope.formss = data;
              //console.log(data);
          });


       };

    $scope.skipB = function(){

      formsDB.skipFB().then(function(data){
              $scope.formss = data;
              //console.log(data);
          });

    };

    $scope.openForm = function(){


    };




});
