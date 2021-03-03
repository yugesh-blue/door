import Controller from '@ember/controller';
import {action} from '@ember/object';
export default class IndexController extends Controller {

   loginChoice="";
    

    @action
    sayClick(a){
        this.loginChoice=a
        console.log(this.loginChoice)
       if(this.loginChoice=="guest"){
        localStorage.setItem("currentUser",JSON.stringify("guest"));
       }
    }
    
}
