import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import likeButton from '../helpers/like-button';

export default class PostPageComponent extends Component {
    constructor(...args) {
        super(...args);
      }
    current=JSON.parse(localStorage.getItem("currentUser"))
    @tracked Datas=JSON.parse(localStorage.getItem("DoorUserPost")) //userpost data
    @service router;
   @tracked optionBox="No" //logout and profile option trigger 
   @tracked optionMore=false; //edit and delete option 
   @tracked currentMoreId=0;    //getting id of the cliked post
   @tracked likeButton=false;   //like button trigger
   @tracked likeUsers=["guest"];
   @tracked likeToggleUsers="no";
   @tracked loopingDivArray=this.Datas;
   @tracked llo=""
   @action
   optionHomePageClick(){
       if(this.optionBox=="Yes"){
        this.optionBox="No"
       }
       else{
        this.optionBox="Yes"
       }
   }
     @action
        post(){
          var i=this.textArea
          
           if(i!="" && i!=undefined){
          var currentUser=this.current
         
           
          
           
           var num=(this.Datas[this.Datas.length-1])? this.Datas[0].id:0;
            var uppend={
                UserId:currentUser,
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
        delete(){
            
            this.optionMore=!this.optionMore
            var currentId=this.currentMoreId
            var localStorages=JSON.parse(localStorage.getItem("DoorUserPost"))
           for(var i=0;i<=localStorages.length-1;i++){
                    if(localStorages[i].id==currentId ){
                        if(this.current!="Admin"){
                        if(localStorages[i].UserId==this.current ){
                        localStorages.splice(i,1)  ;
                        localStorage.setItem("DoorUserPost",JSON.stringify(localStorages));
            var localStorages=JSON.parse(localStorage.getItem("DoorUserPost"))
                            this.Datas=localStorages
                        this.loopingDivArray=localStorages;
                      
                        //this.router.transitionTo("notification");
                        }
                    }
                    else{
                        localStorages.splice(i,1)
                        localStorage.setItem("DoorUserPost",JSON.stringify(localStorages));
                        localStorage.setItem("notification",JSON.stringify("you deleted a post"));
                        this.Datas=localStorages
                        this.loopingDivArray=localStorages;
                        
                      // this.router.transitionTo("notification");
                    }
                }
                
           }

        }
        @action
        edit(){
            let EditcurrentId=this.currentMoreId
            localStorage.setItem("CurrentEdit",JSON.stringify(EditcurrentId));
            this.router.transitionTo("editBox")
            
        }
        @action
        CommentPost(){
           
            var currentId=event.target.id
            var id=currentId.split("t")[1]
            var localStorages=JSON.parse(localStorage.getItem("DoorUserPost"))
           
           if(this.comment!=null && this.comment!=undefined && this.comment!="" ){
            for (let i = 0; i <=localStorages.length-1; i++) {
             if(localStorages[i].id==id){
                 var num=(localStorages[i].PostComment.length!=0) ? localStorages[i].PostComment[0].id:0
                 var commentDatas={name:this.current,
                    commentPost:this.comment,
                     id:num+1,
                    mainId:id
                    }
                localStorages[i].PostComment.unshift(commentDatas)
                localStorage.setItem("DoorUserPost",JSON.stringify(localStorages));
                localStorage.setItem("notification",JSON.stringify("you commented on a post"));
                this.Datas=localStorages
                this.loopingDivArray=this.Datas;
                this.comment=""
                //this.router.transitionTo("notification");

             }


        }
    }
    else{
    }
  }
  @action  
  deletecomment(){
    var id=event.target.id.split("t")[1]
    var id2=event.target.id.split("c")[0]

    var localStorages=JSON.parse(localStorage.getItem("DoorUserPost"))
    for(var i=0;i<=localStorages.length-1;i++){
        if(localStorages[i].id==id2){
            for(var j=0;j<=localStorages[i].PostComment.length-1;j++){
                if(localStorages[i].PostComment[j].id==id){
                    if(this.current=="Admin"){
                   localStorages[i].PostComment.splice(i,1)
                    localStorage.setItem("DoorUserPost",JSON.stringify(localStorages));
                    localStorage.setItem("notification",JSON.stringify("you deleted a comment   "));
                    this.router.transitionTo("notification");
                    }
                    else{
                            if(localStorages[i].PostComment[j].name==this.current){
                   localStorages[i].PostComment.splice(j,1)     
                    localStorage.setItem("DoorUserPost",JSON.stringify(localStorages));
                    localStorage.setItem("notification",JSON.stringify("you deleted a comment   "));
                    this.Datas=localStorages
                    this.loopingDivArray=localStorages;//
                    //this.router.transitionTo("notification");   
                            }
                    }
                }
            }
        }
    }
  }
  @action
  more(){
      this.optionMore=!this.optionMore
      this.currentMoreId=event.target.id.split("e")[1]
        
  }
  @action
  likeToggle(){
      this.likeButton=!this.likeButton
      let className=event.target.className.split(" ")[1]
    let id=event.target.parentElement.id.slice(4,5)
        for (let i = 0; i < this.Datas.length; i++) {
            if(this.Datas[i].id==id){
                if(className!="liked"){
                    this.Datas[i].likedUsers.push(this.current)
                    localStorage.setItem("DoorUserPost",JSON.stringify(this.Datas))
                    break 
                }
                else{
                    for (let j = 0; j < this.Datas[i].likedUsers.length; j++) {
                        if(this.Datas[i].likedUsers[j]==this.current){
                            this.Datas[i].likedUsers.splice(j,1)
                    localStorage.setItem("DoorUserPost",JSON.stringify(this.Datas))
                            break
                        }
                        
                    }
                }
            }
            
        }
    

  } 
  @action
  likedUser(){
      let id=event.target.id
      for (let i = 0; i < this.Datas.length; i++) {
         
          if(this.Datas[i].id==id){
    this.likeUsers=this.Datas[i].likedUsers
  
          }
          
      }
     
      this.likeToggleUsers=(this.likeToggleUsers=="no")?"yes":"no";
      
      
  }
}
