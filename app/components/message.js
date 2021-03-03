import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class MessageNotificationComponent extends Component {

    current=JSON.parse(localStorage.getItem("currentUser"))
    @service router;
    @action
    message(){
       // if(this.current)
       console.log(this.current )
       if(this.current=="Admin"){
                this.router.transitionTo("admin")
       }
       else{
           this.router.transitionTo("homePage")
        }
    }
}
