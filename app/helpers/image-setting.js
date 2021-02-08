import { helper } from '@ember/component/helper';

export default helper(function imageSetting(params/*, hash*/) {
 
  if(params[0]!="Admin" && params[0]!="guest" ){
 
  let UserData=JSON.parse(localStorage.getItem("DoorUserDatas")).AllData
  let imageFilePath;
  
    for (let i = 0; i <UserData.length; i++) {
      if(params[0]==UserData[i].UserId){
        imageFilePath=UserData[i].imagePath
        break
      }
      
    }
         var dataurl=imageFilePath;
         var filename="image"
        var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), 
        n = bstr.length, 
        u8arr = new Uint8Array(n);
        console.log(n,"+++++++++++++++++++")
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    
    var a=new File([u8arr], filename, {type:mime});
    var blobUrl = URL.createObjectURL(a);
   
    return blobUrl;
  }
  else if (params[0]=="Admin") {
    return "../image/adminImage1.png"
  }
  else
  {
    return  "../image/profile.jpg"
  
  }
           
        
       
  
});
