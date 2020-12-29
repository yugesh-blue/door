import Route from '@ember/routing/route';
import RSVP from 'rsvp';
export default class AdminRoute extends Route {
    model(){
        var currentUser=JSON.parse(localStorage.getItem("currentUser"))
        var postData=JSON.parse(localStorage.getItem("DoorUserPost"))
        var datas=JSON.parse(localStorage.getItem("DoorUserDatas")).AllData
        console.log(currentUser)
        return RSVP.hash({
          current:currentUser,
          post:postData,
          userDatas:datas
        })
          
          
       
       
      }
}
