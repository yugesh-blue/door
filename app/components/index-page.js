import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class IndexPageComponent extends Component {
    @service router;

    @action
    sayClick(){
        localStorage.setItem("currentUser",JSON.stringify("guest"));
        this.router.transitionTo("homePage");
        
       
    }
    @action
    Login(){
        this.router.transitionTo("login");

    }
    @action
    Register(){
        this.router.transitionTo("register");

    }
}
