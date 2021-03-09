import Component from '@ember/component';
import { tracked } from '@glimmer/tracking';
import ENV from 'door/config/environment';
import firebase from 'firebase/app';
import 'firebase/storage'
export default Component.extend({
init(){
    var imageUrl;
        this._super(...arguments)
    var userId=this.user;
    if (!firebase.apps.length) {
        firebase.initializeApp(ENV.firebase);
     }else {
        firebase.app(); // if already initialized
     }
      if(userId!="Admin" &&userId!="guest" ){   
      let UserData=JSON.parse(localStorage.getItem("DoorUserDatas")).AllData
      let imageFilePath;
        for (let i = 0; i <UserData.length; i++) {
          if(userId==UserData[i].UserId){
            imageFilePath=UserData[i].imagePath
            break
          }
          
        }
        var storage = firebase.storage();       //storage
      var path=storage.ref()
      var starsRef = path.child(imageFilePath);
      starsRef.getDownloadURL().then((url)=>{
       imageUrl=url
       this.set("url",imageUrl)         
    
      })
      
        }
        else if (userId=="Admin") {
            imageUrl="../image/adminImage1.png"
        }
        else
        {
      imageUrl="../image/profile.jpg"
      
      }
               
      this.set("url",imageUrl)
}

})
