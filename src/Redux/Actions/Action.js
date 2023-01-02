export const SHOW_DATA="SHOW_DATA"

export const showData=()=>(dispatch)=>{

    let info = require('../../Data.json');
    let res = info.DATA
    //console.log(res)
     dispatch({
        
         type:SHOW_DATA,
         payload:res
        
     });
    
 
 };