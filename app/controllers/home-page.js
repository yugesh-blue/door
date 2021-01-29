import Controller from '@ember/controller';
import {action} from '@ember/object';
export default class HomePageController extends Controller {
//     current=JSON.parse(localStorage.getItem("currentUser"))
    Datas=[{
         
        UserId:"yugesh6",
      UserPost:"hello iam yugesh iam workinh in zoho",
      id:1,
      PostComment:[],
      likedUsers:[]
  }
  ,
  {
      UserId:"priya4",
      UserPost:"hello iam priya iam workinh in zoho",
      id:2,
      PostComment:[],
      likedUsers:[]
          },
   {
      UserId:"sudarsan6    ",
      UserPost:"hello iam sudarsan iam workinh in zoho",
      id:3,
      PostComment:[],
      likedUsers:[]
      } 
  ]
  
  init(){
    super.init(...arguments);   
       this.Datas=(localStorage.DoorUserPost) ? JSON.parse(localStorage.DoorUserPost) : this.Datas ;
       console.log(this.Datas)
       localStorage.setItem("DoorUserPost",JSON.stringify(this.Datas));
}

}
