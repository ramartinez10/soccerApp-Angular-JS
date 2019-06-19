export default function playersService (){
    angular.module("soccerApp").service("topScorers",["$http","$q",function($http,$q){
        this.scorers=[1,2,3,4];
        console.log("socrers",this.scorers);
        this.getScorer=function(ligaId){
          console.log("liga : ",ligaId);
          
          var promesa=$q.defer();
      
          $http.get("https://allsportsapi.com/api/football/?&met=Topscorers&leagueId="+ligaId+"&APIkey=9a2357528305f2e08562134772d691ae304c38e78b5aaebf400c1b19cbd01da7").then(
            function(data){
            promesa.resolve(data.data.result);
          },function(){
            promesa.reject("error");
          })
      
         return promesa.promise;    
        }
      }])
}