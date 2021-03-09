import { helper } from '@ember/component/helper';

export default helper(function profilePage(params/*, hash*/) {
  if(params[0]=="profile"){
      if(params[1]==params[2]){
        return true
      }
      else{
        return false
      }
  }
  else{
    return true 
  }
  return params;
});
