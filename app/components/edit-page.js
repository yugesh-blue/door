import Component from '@ember/component';
import { action } from '@ember/object';
export default Component.extend({
   val:"",
  
    init(){
        this._super(...arguments);
        console.log("tyuio")
        var currentUser=JSON.parse(localStorage.getItem("CurrentEdit"));
       
        console.log(currentUser)
      var localStorages=JSON.parse(localStorage.getItem("DoorUserPost"))
          var currentId=currentUser;
          console.log(currentId)
           //console.log(event.target.id)
          //console.log(localStorages);
          for(var i=0;i<=localStorages.length-1;i++){
           //console.log(localStorages[i].id==currentId)
                   if(localStorages[i].id==currentId ){
                    console.log(localStorages[i].UserPost)
                    var Data=localStorages[i].UserPost
                   
                       
               }
               
          }
        this.set("val",Data)
    },

    @action
    post(){
       this.a="yugesh"
        this.val
        var Datas=JSON.parse(localStorage.getItem("CurrentEdit"))
        console.log(this.val)
        this._super(...arguments);
        console.log("tyuio")
        var currentUser=JSON.parse(localStorage.getItem("CurrentEdit"));
       
        console.log(currentUser)
      var localStorages=JSON.parse(localStorage.getItem("DoorUserPost"))
          var currentId=currentUser.split("+").[1]
          console.log(currentId)
           //console.log(event.target.id)
          //console.log(localStorages);
          for(var i=0;i<=localStorages.length-1;i++){
           //console.log(localStorages[i].id==currentId)
                   if(localStorages[i].id==currentId ){
                    console.log(localStorages[i].UserPost)
                    localStorages[i].UserPost=this.val;
                    console.log(localStorages[i].UserPost)
                    localStorage.setItem("DoorUserPost",JSON.stringify(localStorages))
                    localStorage.setItem("notification",JSON.stringify("you posted has been edited"));

                     
               }
               
          }
    }
    
  
})

