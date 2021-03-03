import { helper } from '@ember/component/helper';

export default helper(function countLikes(params/*, hash*/) {
  var likesData="";
  for (let i = 0; i < params[0].length; i++) {
    if(params[0][i].id==params[1]){
      likesData=params[0][i].likedUsers
      if(likesData.length!=0){
      return likesData.length+" Likes"
      }
      else{
        return ""
      }
    }
  }
});
