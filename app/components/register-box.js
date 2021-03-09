  import Component from '@glimmer/component';
  import ENV from 'door/config/environment';
  import { action } from '@ember/object';
  import { inject as service } from '@ember/service';
  import { tracked } from '@glimmer/tracking';

export default class RegisterBoxComponent extends Component {
  @tracked blobimage="../image/profile.jpg";
  @tracked ImageFile;
  @tracked cropToggle="";
  @service router 
  @tracked imageb="";
    yugesh=this.name;
    @action
    name(){
          let files=this.ImageFile
          let imageType=files.type.split("/")[1]
         
          //firebase
          
          if (!firebase.apps.length) {
            firebase.initializeApp(ENV.firebase);
         }else {
            firebase.app(); // if already initialized, use that one
         }
          var uploadTask=firebase.storage().ref("profileImages/"+this.Name+"."+imageType).put(files).then((snapshot)=>{
            console.log("image uploded")
          });
         
         //''''''''''''''''


        if(!this.checkName && this.Name!="" && this.email!="" && this.pass!="" ){
        var a={
          UserId: this.Name,
          Email:this.email,
          pass:this.pass,
          imagePath:"profileImages/"+this.Name+"."+imageType,
           }
          
           localStorage.setItem("currentUser",JSON.stringify(a.UserId));
          var data={
            AllData:[]
          }
          var datas=(localStorage.DoorUserDatas) ? JSON.parse(localStorage.DoorUserDatas) : data ;

           datas.AllData.push(a)
           localStorage.setItem("DoorUserDatas",JSON.stringify(datas));
           this.router.transitionTo("index")
        }
       
      }
      @action
    back(){
        this.router.transitionTo("index")
    }
    @tracked checkName="false"

    @action
    checkNames(){
         var Datas=JSON.parse(localStorage.getItem("DoorUserDatas"))
         this.checkName=false;
         if(Datas!=null){
           Datas=Datas.AllData
          this.checkName=false;      
         let userName=this.Name.trim()
          if(userName!="guest"){
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
      this.ImageFile=event.target.files[0]
      var blobUrl = URL.createObjectURL(this.ImageFile);
      this.blobimage=blobUrl;
      this.cropToggle="cropMainDivyes"

    }

//attributes
@tracked checkClick="no"
@tracked currentClickDataX="" //feftching the current click of x axis
@tracked currentClickDataY="" 
//css styles
@tracked marginTop=0;
@tracked marginLeft=0;
@tracked upMovedCount=0;
@tracked downmovedCount=0;
@tracked leftMoveCount=0;
@tracked rightMovedCount=0;
@tracked image=document.querySelector(".cropImage")
@tracked DrawWidth=this.image.naturalWidth-(this.Xaxis*2)
@tracked Xaxis=(12/100)*this.image.naturalWidth;
@tracked Yaxis=(13/100)*this.image.naturalHeight;


    @action
    mouseMove(a){ 
      if(this.checkClick=="yes"){
          if(this.currentClickDataX<event.offsetX &&this.rightMovedCount!=50 ){
            this.currentClickDataX=event.offsetX
            this.marginLeft=this.marginLeft+1
            this.rightMovedCount=this.rightMovedCount+1
            this.leftMoveCount=this.leftMoveCount-1
            this.Xaxis=this.Xaxis-(0.2/100)*this.image.naturalWidth
           }
           else if(this.currentClickDataX>event.offsetX && this.leftMoveCount!=50){        
              this.marginLeft=this.marginLeft-1
            this.currentClickDataX=event.offsetX
            this.rightMovedCount=this.rightMovedCount-1
            this.leftMoveCount=this.leftMoveCount+1

            this.Xaxis=this.Xaxis+(0.2/100)*this.image.naturalWidth

           }
        else if(this.currentClickDataY<event.offsetY && this.downmovedCount!=50){
            this.currentClickDataY=event.offsetY
            this.marginTop=this.marginTop+1
            this.downmovedCount=this.downmovedCount+1
            this.upMovedCount=this.upMovedCount-1;
            this.Yaxis=this.Yaxis-(0.2/100)*this.image.naturalHeight
          }
          else if(this.currentClickDataY>event.offsetY && this.upMovedCount!=50){
             this.currentClickDataY=event.offsetY
            this.marginTop=this.marginTop-1
            this.downmovedCount=this.downmovedCount-1
            this.upMovedCount=this.upMovedCount+1;
            this.Yaxis=this.Yaxis+(0.2/100)*this.image.naturalHeight
          }
    
      }
    }
    @action
    mouseClicked(){
    this.checkClick="yes"
      this.currentClickDataX=event.offsetX
      this.currentClickDataY=event.offsetY
    }
    @action
    mouseRealsed(){
      this.checkClick="no"
      var a=document.querySelector("#canvasCrop")
      var img=new Image()
      img.src=this.blobimage
      var ctx=a.getContext("2d")
      ctx.drawImage(img,this.Xaxis,this.Yaxis,this.DrawWidth,this.image.naturalHeight,0,0,300,200);
      this.imageb=a.toDataURL() 
     
    }
    @action
    doneCrop(){
      //base 64 converter 
      var dataurl=this.imageb
      var filename=this.imageb.split(';')[0].split(":")[1];
      var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), 
      n = bstr.length, 
      u8arr = new Uint8Array(n);
      
  while(n--){
      u8arr[n] = bstr.charCodeAt(n);
  }
  
  var ImageFileData=new File([u8arr], filename, {type:mime});
  var blobUrl = URL.createObjectURL(ImageFileData);
  this.blobimage=blobUrl;
  this.ImageFile=ImageFileData;
  this.cropToggle="";
    }
   
}
