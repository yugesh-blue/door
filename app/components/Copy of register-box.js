import Component from '@glimmer/component';
  import { action } from '@ember/object';
  import { inject as service } from '@ember/service';
  import { tracked } from '@glimmer/tracking';
export default class RegisterBoxComponent extends Component {
  @tracked blobimage="";
  @tracked ImageFile
  @service router 
    yugesh=this.name;
    init(){
      
    }
    @action
    name(){
        console.log(this.Name)
        console.log(this.email)
        console.log(this.pass)
        console.log(this.image)
        let image;  
        const reader= new FileReader();
        reader.onload=()=>{
          

        localStorage.setItem("image",reader.result)
         
        }
        reader .readAsDataURL(this.ImageFile)
        var p0=localStorage.getItem("image")
        console.log(p0.split("base64"))
        var blobUrl = URL.createObjectURL(p0);
        console.log(blobUrl);
        console.log(this.ImageFile)
        this.blobimage=blobUrl;
        document.getElementById("bby").setAttribute("src",)
        if(!this.checkName && this.Name!="" && this.email!="" && this.pass!="" ){
         
         
        var a={
          UserId: this.Name,
          Email:this.email,
          pass:this.pass,
          imagePath:image,
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
         //  this.router.transitionTo("index")
        }  
        
      }
      @action
    back(){
        this.router.transitionTo("index")
    }
    @tracked checkName="false"

    @action
    checkNames(){
          console.log("this.name")
         var Datas=JSON.parse(localStorage.getItem("DoorUserDatas")).AllData
          this.checkName=false;
          console.log("fgh")
         let userName=this.Name.trim()
          if(userName!="guest"){
            console.log("fghj")
          for (let i = 0; i<= Datas.length-1; i++) {
            if(Datas[i].UserId==userName){
                this.checkName=true;
                break
            }
          }
        }
        else
        this.checkName=true
    }
    @action
    imageChange(){
      console.log(event.target.files[0])
      this.ImageFile=event.target.files[0]
      var blobUrl = URL.createObjectURL(this.ImageFile);
      console.log(blobUrl);
      console.log(this.ImageFile)
      this.blobimage=blobUrl;


    }
}
