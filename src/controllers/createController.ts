import { Player } from "../model/Player";

interface ICreate{
    player:Player;
    savePlayer():void;

}

export default class CreateController implements ICreate{
    player: Player;
    word:string;

    formData:Player;

    static $inject=['scorerService'];
    constructor(public scorerService:any){
        this.word="hello";
        
    }


    savePlayer(): void {

        let player=new Player(23,this.formData.player_name,this.formData.player_number,this.formData.player_country,this.formData.player_type,this.formData.player_age,this.formData.player_yellow_cards,this.formData.player_red_cards,this.formData.team_name,this.formData.team_key,this.formData.player_match_played,this.formData.player_goals);
        this.scorerService.addPlayer(player);
        console.log("Save player method",this.formData);
       
        return;
    }

     

    
}