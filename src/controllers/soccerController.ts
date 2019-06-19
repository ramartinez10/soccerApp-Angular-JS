///<reference path="../../node_modules/@types/angular/index.d.ts" />

import { League } from "../model/League";

interface ISoccerScope{
   
    getLeagues():ng.IPromise<League[]>;
    onSelectScorer(index:number,idLeague:number):ng.IPromise<any[]>;
    leagues:League[];
    scorers:any[];
    currentScorer:number;
    soccerInfo(scorer:{ player_name: string; goals: number; }):void;

}

export default class SoccerController implements ISoccerScope {

    scorers: any[];
    currentScorer:number;
    leagues: any[];
    show:boolean;
    ruta:any;
    
    static $inject=['$http', 'soccerApi','scorerService','$route'];


    constructor(private $http:ng.IHttpService, public soccerApi:any,public scorerService:any,public $route:any){
     this.getLeagues();
     this.currentScorer=100000;
     this.ruta=$route;
    }

    setFlags(country:string){
       return this.scorerService.setFlags(country);
    }


    myValueFunction(item:any) {
        
        if(item.league_key==195||item.league_key==176||item.league_key==148){
            return true;
        }else{
            return false;
        }

     };

    getLeagues(): angular.IPromise<League[]> {
        return  this.soccerApi.getLeagues()
        .then((data:ng.IHttpPromiseCallbackArg<League[]>):League[]=>{
            this.leagues=<League[]><unknown>data;
            return this.leagues=<League[]><unknown>data;
        })
    }
    onSelectScorer(index:number,idLeague:number): angular.IPromise<any[]> {
        return this.scorerService.getScorer(idLeague)
        .then((data:ng.IHttpPromiseCallback<any[]>):any[]=>{
            this.scorers=<any[]><unknown>data;
            this.currentScorer=index;
            return this.scorers=<any[]><unknown>data;
        })
    }

    soccerInfo(scorer: { player_name: string; goals: number; }) {
        if(scorer){
            return `Goleador de la liga : ${scorer.player_name} ha anotado ${scorer.goals} goles.`
          }
    }


}