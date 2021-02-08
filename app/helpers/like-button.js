import { helper } from '@ember/component/helper';

export default helper(function likeButton(params, params2) {  
  var likesData="";
  for (let i = 0; i < params[0].length; i++) {
    if(params[0][i].id==params[2]){
      likesData=params[0][i].likedUsers
    }
  }
  if(likesData!=""){
      for (let i = 0; i < likesData.length; i++) {
        if(likesData[i]==params[1]){
          return true;
        }
      }

      return false  
      
  }
  else{
    return false
  } 
 


});
