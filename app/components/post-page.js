import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class PostPageComponent extends Component {
    constructor(...args) {
        super(...args);
      }
    current=JSON.parse(localStorage.getItem("currentUser"))
    @tracked Datas=JSON.parse(localStorage.getItem("DoorUserPost")) //userpost data
    @service router;
   @tracked optionMore=false; //edit and delete option 
   @tracked currentMoreId=0;    //getting id of the cliked post
   @tracked likeButton=false;   //like button trigger
   @tracked likeUsers=["guest"];
   @tracked likeToggleUsers="no";
   @tracked loopingDivArray=this.Datas;
   @tracked llo=""
   
  
}