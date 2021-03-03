import { helper } from '@ember/component/helper';
import ENV from 'door/config/environment';
import firebase from 'firebase/app';
import 'firebase/storage'
export default helper(function imageSetting(params/*, hash*/) {
  if (!firebase.apps.length) {
    firebase.initializeApp(ENV.firebase);
 }else {
    firebase.app(); // if already initialized, use that one
 }
  if(params[0]!="Admin" && params[0]!="guest" ){
 console.log(params)
  let UserData=JSON.parse(localStorage.getItem("DoorUserDatas")).AllData
  let imageFilePath;
    for (let i = 0; i <UserData.length; i++) {
      if(params[0]==UserData[i].UserId){
        imageFilePath=UserData[i].imagePath
        break
      }
      
    }
    var storage = firebase.storage();
  var path=storage.ref()
 console.log(imageFilePath)
 let a="1";
  var starsRef = path.child(imageFilePath);
  starsRef.getDownloadURL().then((url)=>{
    console.log(url)
   console.log(a)
   return a

  })
console.log(a)
  
  }
  else if (params[0]=="Admin") {
    return "../image/adminImage1.png"
  }
  else
  {
    return  "../image/profile.jpg"
  
  }
           
        
       
  
});
