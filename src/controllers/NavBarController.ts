interface INavBar{
    title:string;
    setActiveTab(option:string):string
}

export default class NavBarController implements INavBar{

    title: string;
    tabLeague:string;
    tabPlayer:string;
    currentTab:string;
    ruta:any;
    
   static $inject=['$route'];
   constructor(public $route:any){
       this.title="Soccer App ";
       this.currentTab="tabLeague";
       this.ruta=$route;   
   }

   setActiveTab(option:string): string {
    return this.currentTab=option;
    }
}