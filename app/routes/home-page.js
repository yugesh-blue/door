import Route from '@ember/routing/route';
import RSVP from 'rsvp';
export default class HomePageRoute extends Route {
  model(){
   var currentUser=JSON.parse(localStorage.getItem("currentUser"))
   var postData=JSON.parse(localStorage.getItem("DoorUserPost"))
   console.log(currentUser)
   console.log(postData[0].PostComment)
   return RSVP.hash({
     current:currentUser,
     post:postData,

   })
     
     
  
  
 }

}
        

