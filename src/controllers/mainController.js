export default function mainController(){
  angular.module("soccerApp").controller('mainCtrl',['$scope','soccerApi','topScorers',function($scope,soccerApi,topScorers){
    $scope.soccerData=soccerApi;
    $scope.selectedOrder="country_key";
    $scope.scorers;
    $scope.currentScorer=100000;

 
    $scope.setFlags=function(item){
     let flag=$scope.generateFlag(item);
     return "https://www.countryflags.io/"+flag+"/flat/32.png";
    }
 
    $scope.generateFlag=function(country){
      let code=country.toLowerCase();
      
      if(code=="turkey"){
        return "tr";
      }
      return code.substring(0, 2);
    }
 
    $scope.myValueFunction = function(item) {
     return item.league_key>149;
    };
 
    $scope.scorerInfo=function(item){
      if(item){
        return `Goleador de la liga : ${item.player_name} ha anotado ${item.goals} goles.`
      }

    }
 
    $scope.onSelectScorer=function(index,leagueId){
      topScorers.getScorer(leagueId).then(
        function(data){
          $scope.scorers=data;
          $scope.currentScorer=index;
        }),function(){
 
        };
    }
   
    $scope.onSelectOrder=function(type){
    $scope.selectedOrder=type;
   }
    $scope.soccerData.getLeagues().then(
        function(data){
          
        },
        function(){
 
        }
    )
 }])
}