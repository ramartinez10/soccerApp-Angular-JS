///<reference path="../../node_modules/@types/angular/index.d.ts" />

import { League } from "../model/League";

interface ILeagueService{

    getLeagues():ng.IPromise<League[]>
    exmpleLeagues:string[];
    getLeaguesList():string[];
}

class LeagueService implements ILeagueService{

    exmpleLeagues: string[];

    static $inject="$http";
    constructor(private $http:ng.IHttpService){
        this.exmpleLeagues=['premiere','league one','serie a'];
    }
    
    getLeagues(): angular.IPromise<League[]> {
        return this.$http.get('https://allsportsapi.com/api/football/?met=Leagues&APIkey=9a2357528305f2e08562134772d691ae304c38e78b5aaebf400c1b19cbd01da7')
        .then((response:ng.IHttpPromiseCallbackArg<League[]>):League[]=>{
            return <League[]><unknown>response.data;
        })
    }

    getLeaguesList(): string[] {
        return this.exmpleLeagues;
    }
}


export {ILeagueService,LeagueService};
