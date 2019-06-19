import { Player } from "../model/Player";

interface IScorers{
    getScorer(ligaId:number):ng.IPromise<any[]>;
    getPlayer(idPlayer:number):ng.IPromise<any>;
    scorers:Player[];
    getCurrentScorer():any[];
    addPlayer(player:Player):number;
    checkPlayer(idPlayer:number):boolean;
}

class ScorerService implements IScorers{

    scorers: any[]=[];

    getCurrentScorer(): any[] { 
        return this.scorers;
    }

    getPlayer(idPlayer: number): angular.IPromise<any> {
       return this.$http.get("https://allsportsapi.com/api/football/?&met=Players&playerId="+idPlayer+"&APIkey=9a2357528305f2e08562134772d691ae304c38e78b5aaebf400c1b19cbd01da7")
       .then((response:ng.IHttpPromiseCallbackArg<any[]>):any=>{
             return <any>response.data;
       })
    }

    getScorer(ligaId: number): angular.IPromise<any[]> {
       return this.$http.get("https://allsportsapi.com/api/football/?&met=Topscorers&leagueId="+ligaId+"&APIkey=9a2357528305f2e08562134772d691ae304c38e78b5aaebf400c1b19cbd01da7")
        .then((response:ng.IHttpPromiseCallbackArg<any[]>):any[]=>{
            return <any[]><unknown>response.data;
        })
    }

    checkPlayer(playerId:number): boolean {
         
        let isSelected=true;

        this.scorers.forEach((item)=>{
            if(item.player_key==playerId){
                return isSelected= false;
            }
        })

        return isSelected;
    }

    addPlayer(player:Player): number {
        if(this.scorers){
            if(this.checkPlayer(player.player_key)){
                return this.scorers.push(player);
            }else{
                alert("El jugadaro ya esta seleccionado");
            }
        }
      }

    setFlags(country: string): string {
        let flag=this.generateFlag(country);
        return "https://www.countryflags.io/"+flag+"/flat/32.png";
    }
    generateFlag(country: string): string {
        let code=country.toLowerCase();

        if(code=="turkey"){
          return "tr";
        }
        if(code=="switzerland"){
            return "ch";
          }
          if(code=="poland"){
            return "pl";
          }
          if(code=="england"){
            return "gb";
          }
        return code.substring(0, 2);
    }

    static $inject='$http';

    constructor(private $http:ng.IHttpService){
       
    }

}

export {IScorers,ScorerService}