import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
export default class TaskBarComponent extends Component {


    current=JSON.parse(localStorage.getItem("currentUser"))
    @service router;
    @action
    optionHomePageClick(){
      this.router.transitionTo("homePage");
    }

    @action
  profilePageChange(){
        localStorage.setItem("CurrentProfileName",(this.current));
        this.router.transitionTo("profile");
  }
  @action 
  logout(){
    this.router.transitionTo("index");
  }
  @action
  CreatePost(){
    this.router.transitionTo("WritePost");

  }

}
