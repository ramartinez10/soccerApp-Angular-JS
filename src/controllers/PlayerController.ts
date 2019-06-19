import { Player } from "../model/Player";

interface IPalyer{
  getPlayer(playerId:number):ng.IPromise<any>;
  showInfo:boolean;
  statusPlayer:string;
  selectModal():string;
  addPlayer(player:Player):void;
  playerId:number;
  players:Player[];
}

export default class PlayerController implements IPalyer{

    players: any[];
    showInfo:boolean;
    statusPlayer:string;
    playerId:number;

    static $inject=['$routeParams','scorerService','$route'];
    constructor(public $routeParams:any,public scorerService:any,$route:any){

    this.players=[];
    }

    $onInit():void{
      if(this.$routeParams.codigo){
        this.playerId=this.$routeParams.codigo;
        this.showInfo=false;
        this.getPlayer(this.playerId);
        
        }else{
            if(this.scorerService.getCurrentScorer()===undefined||this.scorerService.getCurrentScorer().length==0){
              this.showInfo=true;
            }else{
              this.showInfo=false;
              
              this.players=[...this.scorerService.getCurrentScorer()];
              
            }
        }
    }

    $onDestroy():void{
      return;
      
    }
    addPlayer(player:Player): void {
       this.players.push(player);
    }
  
    selectModal(): string {
      return 'Select player in Leagues Tab';
    }

    getFlag(country:string){
      return this.scorerService.setFlags(country);
    }

    getPlayer(playerId:number): angular.IPromise<any> {
      return  this.scorerService.getPlayer(playerId)
      .then((data:ng.IHttpPromiseCallbackArg<any>):any=>{
          return this.setPlayers(data);
      })
    }

    setPlayers(data:any){
      
      let idPlayer=data.result[0].player_key;
      
      if(this.scorerService.checkPlayer(idPlayer)){
        this.players=[...this.scorerService.getCurrentScorer()];
        this.players.push(data.result[0])
        this.scorerService.addPlayer(data.result[0]);
      }else{
        this.players=[...this.scorerService.getCurrentScorer()];
         alert("El jugador ya se encuentra seleccionado");
      }

      return;
    }

}