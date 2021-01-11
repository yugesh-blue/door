import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class PostPageComponent extends Component {
   
    current=JSON.parse(localStorage.getItem("currentUser"))
    @tracked Datas=JSON.parse(localStorage.getItem("DoorUserPost"))
    @service router;

   @tracked optionBox="No"

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
           console.log(this.Datas,this.current)
          var i=this.textArea
         // console.log(i)
           
          var currentUser=this.current
         
           
          
           
           var num=(this.Datas[this.Datas.length-1])? this.Datas[this.Datas.length-1].id:0;
           //console.log(num)
        
            var uppend={
                UserId:currentUser,
                UserPost:i,
                id:num+1,
                PostComment:[]

            }
          
            this.Datas.push(uppend)
            //console.log(this.Datas+"......")
            localStorage.setItem("DoorUserPost",JSON.stringify(this.Datas));
            localStorage.setItem("notification",JSON.stringify("you posted new post"));

            this.router.transitionTo("notification");
            
        }
        @action
        delete(){
           
           //console.log(event.target.id)
            var currentId=event.target.id
            var localStorages=JSON.parse(localStorage.getItem("DoorUserPost"))
           //console.log(localStorages);
           for(var i=0;i<=localStorages.length-1;i++){
            //console.log(localStorages[i].id==currentId)
                    if(localStorages[i].id==currentId ){
                        if(this.current!="Admin"){
                        if(localStorages[i].UserId==this.current){
                        localStorages.splice(i,1)  ;
                        localStorage.setItem("DoorUserPost",JSON.stringify(localStorages));
                        this.router.transitionTo("notification");
                        }
                    }
                    else{
                        localStorages.splice(i,1)
                        localStorage.setItem("DoorUserPost",JSON.stringify(localStorages));
                        localStorage.setItem("notification",JSON.stringify("you deleted a post"));

                      //  this.router.transitionTo("notification");
                    }
                }
                
           }

           //console.log(localStorages)       
        }
        @action
        edit(){
            let EditcurrentId=event.target.id
            localStorage.setItem("CurrentEdit",JSON.stringify(EditcurrentId));
            this.router.transitionTo("editBox")
            
        }
        @action
        CommentPost(){
           
            var currentId=event.target.id
            //console.log(event.target.nextSibling)
            var id=currentId[currentId.length-1]
            //console.log(id)
            var localStorages=JSON.parse(localStorage.getItem("DoorUserPost"))
            //console.log(localStorages.PostComment)
            //console.log("fghjk"+id);
            
            //console.log(commentDatas)
           if(this.comment!=null && this.comment!=undefined){
            for (let i = 0; i <=localStorages.length-1; i++) {
             if(localStorages[i].id==id){
                 var num=(localStorages[i].PostComment.length!=0) ? localStorages[i].PostComment.length:0
                 var commentDatas={name:this.current,
                    commentPost:this.comment,
                     id:num,
                    mainId:id
                    }
             // console.log("hjk");
                localStorages[i].PostComment.push(commentDatas)
                localStorage.setItem("DoorUserPost",JSON.stringify(localStorages));
                localStorage.setItem("notification",JSON.stringify("you commented on a post"));

                this.router.transitionTo("notification");

             }


        }
    }
    else{
       // console.log("nooo")
    }
  }
  @action  
  deletecomment(){
    //console.log(event.target.id.split("c")[0]);
    var id=event.target.id.split("t")[1]
    //console.log(event.target.parentElement.previousElementSibling.previousElementSibling.id.slice(4,6))
    var id2=event.target.id.split("c")[0]
    //console.log(id2);
    var localStorages=JSON.parse(localStorage.getItem("DoorUserPost"))
    //console.log(localStorages[id2].PostComment,"....post")
    for(var i=0;i<=localStorages.length-1;i++){
        if(localStorages[i].id==id2){
            //console.log(localStorages[i].PostComment)
            for(var j=0;j<=localStorages[i].PostComment.length-1;j++){
                //console.log(localStorages[i].PostComment[j].id,id,"rtyuio");
                if(localStorages[i].PostComment[j].id==id){
                    if(this.current=="Admin"){
                    //console.log(localStorages[i].PostComment[j])
                    //console.log("hii")
                   localStorages[i].PostComment.splice(i,1)
                    //console.log(localStorages[i],"hh");
                    localStorage.setItem("DoorUserPost",JSON.stringify(localStorages));
                    localStorage.setItem("notification",JSON.stringify("you deleted a comment   "));
                    this.router.transitionTo("notification");
                    }
                    else{
                            if(localStorages[i].PostComment[j].name==this.current){
                                console.log(localStorages[i].PostComment[j])
                    //console.log(localStorages[i].PostComment+"hii")
                   localStorages[i].PostComment.splice(j,1)
                   //console.log(localStorages[i].PostComment[j])
                    console.log(localStorages[i],"hh");
                    localStorage.setItem("DoorUserPost",JSON.stringify(localStorages));
                    localStorage.setItem("notification",JSON.stringify("you deleted a comment   "));
                    this.router.transitionTo("notification");   
                            }
                    }
                }
            }
        }
    }
  }
   
}
