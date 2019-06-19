export default function getLeagues(){
    angular.module("soccerApp").factory("soccerApi",['$http','$q','$rootScope',function($http,$q){
        var self={
         "leagues":[],
         "player":5,
         "exampleLeagues":['premiere','league one','serie a']
        }

        self.getLeaguesList=function(){
          return self.exampleLeagues;
        }
     
        self.getLeagues=function(){
     
         var q=$q.defer();
         $http({
             method: 'GET',
             url: 'https://allsportsapi.com/api/football/?met=Leagues&APIkey=9a2357528305f2e08562134772d691ae304c38e78b5aaebf400c1b19cbd01da7'
           }).then(function(data) {
             console.log("carga la info");
             q.resolve(data.data.result);
             self.leagues=data.data.result;  
              
             }, function (error) {
               q.reject("Error al cargar");
             });
     
             return q.promise;
        }
     
        return self;
     
     }])
}

