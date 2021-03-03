import { helper } from '@ember/component/helper';

export default helper(function homepageIf(params ) {
  if(params[0]=="Admin" || params[0]==params[1]){
    return true
  }else{
  return false;
  }
});
