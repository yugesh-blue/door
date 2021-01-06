import { helper } from '@ember/component/helper';

export default helper(function homepageIf(params ) {
  console.log(params[0])
  if(params[0]=="Admin" || params[0]==params[1]){
    return true
  }else{
  return false;
  }
});
