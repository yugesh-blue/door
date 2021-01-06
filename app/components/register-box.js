import Component from '@glimmer/component';
  import { action } from '@ember/object';
  import { inject as service } from '@ember/service';

export default class RegisterBoxComponent extends Component {
  @service router 
    yugesh=this.name;
    init(){
      
    }
    @action
    name(){
        console.log(this.Name)
        console.log(this.email)
        console.log(this.pass)
        console.log(this.data+"ghjk") 
        var a={
          UserId: this.Name,
          Email:this.email,
          pass:this.pass,
          imagePath:this.image,
          UserPost:""
           }

           localStorage.setItem("currentUser",JSON.stringify(a.UserId));
          var data={
            AllData:[]
          }
          console.log(localStorage.DoorUserDatas+"////////")
          var datas=(localStorage.DoorUserDatas) ? JSON.parse(localStorage.DoorUserDatas) : data ;

           datas.AllData.push(a)
           console.log(datas+"hnm")
           localStorage.setItem("DoorUserDatas",JSON.stringify(datas));
          
           
      }
      @action
    back(){
        this.router.transitionTo("index")
    }
}
