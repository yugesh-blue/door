import { helper } from '@ember/component/helper';

export default helper(function likeButton(params, params2) {
  console.log(params[0])
  console.log("sdfghjk................")
  var likesData="";
  for (let i = 0; i < params[0].length; i++) {
    if(params[0][i].id==params[2]){
      likesData=params[0][i].likedUsers
    }
  }
  console.log("................................")
  if(likesData!=""){
    console.log("iiiiii")
      for (let i = 0; i < likesData.length; i++) {
        if(likesData[i]==params[1]){
        console.log("triked true")
          return true;
        }
      }
      return false
      
  }
  else{
    console.log("triked false")
    return false
  }
  console.log(params[3])
 


});
