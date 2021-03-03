import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
    Datas=[{
         
        UserId:"yugesh6",
      UserPost:"hello iam yugesh iam workinh in zoho",
      id:1,
      PostComment:[],
      likedUsers:[]
  }

  ]

 
  init(){
    super.init(...arguments);   
    
       this.Datas=(localStorage.DoorUserPost) ? JSON.parse(localStorage.DoorUserPost) : this.Datas ;
       console.log(this.Datas)
       localStorage.setItem("DoorUserPost",JSON.stringify(this.Datas));
       var a={
                    UserId:"yugesh6",
                    Email:"yugesh4444@gmail.com",
                     pass:"yugesh123",
                     imagePath:"profileImages/yugesh6.png"
       }
       var UserDatas={
        AllData:[]
       }
       UserDatas.AllData.push(a)
       console.log(UserDatas)

      UserDatas=(localStorage.DoorUserDatas) ? JSON.parse(localStorage.DoorUserDatas) : UserDatas;
      localStorage.setItem("DoorUserDatas",JSON.stringify(UserDatas));
}

}
