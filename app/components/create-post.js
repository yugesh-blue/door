import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class CreatePostComponent extends Component {
   @tracked loopingDivArray=this.Datas;
   @service router;
   @tracked Datas=JSON.parse(localStorage.getItem("DoorUserPost")) //userpost data
   current=JSON.parse(localStorage.getItem("currentUser"))
    
    @action
    post(){
      var i=this.Textarea
      var Heading=this.Heading;
      console.log(i,Heading)
       if(i!="" && i!=undefined && Heading!="" && Heading!=undefined){
      var currentUser=this.current
     
       
      
       
       var num=(this.Datas[this.Datas.length-1])? this.Datas[0].id:0;
        var uppend={
            UserId:currentUser,
            UserPostHeading:Heading,
            UserPost:i,
            id:num+1,
            PostComment:[],
            likedUsers:[]

        }
      
        this.Datas.unshift(uppend)
        localStorage.setItem("DoorUserPost",JSON.stringify(this.Datas));
        localStorage.setItem("notification",JSON.stringify("you posted new post"));
        this.loopingDivArray=this.Datas;
        this.router.transitionTo("notification");
    }  
    }
    @action
    Cancel(){
        this.router.transitionTo("homePage");
        
    }
   
}
