import Component from '@glimmer/component';
  import { action } from '@ember/object';
  import { inject as service } from '@ember/service';
  import { tracked } from '@glimmer/tracking';
export default class RegisterBoxComponent extends Component {
  @tracked blobimage="../image/profile.jpg";
  @tracked ImageFile
  @service router 
    yugesh=this.name;
    @action
    name(){
        console.log(this.Name)
        console.log(this.email)
        console.log(this.pass)
        //console.log(this.image)
        console.log(this.ImageFile)
        let image;  
        var summa;
        const reader= new FileReader();
        reader.onload=()=>{
        summa=reader.result;
        console.log(summa)
        if(!this.checkName && this.Name!="" && this.email!="" && this.pass!="" ){
          console.log("++++ ")
        var a={
          UserId: this.Name,
          Email:this.email,
          pass:this.pass,
          imagePath:summa,
           }
           console.log(summa)
           localStorage.setItem("currentUser",JSON.stringify(a.UserId));
          var data={
            AllData:[]
          }
          var datas=(localStorage.DoorUserDatas) ? JSON.parse(localStorage.DoorUserDatas) : data ;

           datas.AllData.push(a)
           console.log(datas+"hnm")
           localStorage.setItem("DoorUserDatas",JSON.stringify(datas));
           this.router.transitionTo("index")
        }
    //   }
    //     console.log(summa)
    //      let p0=JSON.parse(localStorage.getItem("DoorUserDatas")).AllData
         
    //      var dataurl=p0;
    //      var filename="image"
    //     var arr = dataurl.split(','),
    //     mime = arr[0].match(/:(.*?);/)[1],
    //     bstr = atob(arr[1]), 
    //     n = bstr.length, 
    //     u8arr = new Uint8Array(n);
        
    // while(n--){
    //     u8arr[n] = bstr.charCodeAt(n);
    // }
    
    // var a=new File([u8arr], filename, {type:mime});
    // console.log(a)
    //     console.log(p0.split("base64,"))
    //     var blobUrl = URL.createObjectURL(a);
    //     console.log(blobUrl);
    //     console.log(this.ImageFile)
    //     this.blobimage=blobUrl;
    //     // document.getElementById("bby").setAttribute("src",this.blobimage)
    //     console.log(summa)
         
      } 
      reader .readAsDataURL(this.ImageFile) 
      }
      @action
    back(){
        this.router.transitionTo("index")
    }
    @tracked checkName="false"

    @action
    checkNames(){
          console.log("this.name")
         var Datas=JSON.parse(localStorage.getItem("DoorUserDatas"))
         this.checkName=false;
         if(Datas!=null){
           Datas=Datas.AllData
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
        
        else{
        this.checkName=true
        }
    }
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
