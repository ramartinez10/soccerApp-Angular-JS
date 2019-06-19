export default class CustomFilters{
     public static  countryKeyFormat(){
         return function(code:string){
            if(code){
                let codeArray= [...code]; 
                let finalCode="";
                codeArray.forEach((item,index)=>{
                  if(index<codeArray.length-1){
                    item+="➡";
                  }
                  return finalCode+=item;
                });
        
               return finalCode;
               }
         }

     }
}