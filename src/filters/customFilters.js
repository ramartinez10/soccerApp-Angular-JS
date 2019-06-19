export default function customFilters(){
    
var filters=angular.module("customFilters",[]);

filters.filter('countryKeyFormat',function(){
     return function(code){
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

})


}
