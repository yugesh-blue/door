import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class LoginPageComponent extends Component {
    @service router;

    @action
    login(){
        console.log("jii");
        console.log(this.password);
        console.log(this.emailId);
        var localStorageUserData=JSON.parse(localStorage.getItem("DoorUserDatas"))
        if(localStorageUserData!=null){
        if(this.emailId=="Admin" && this.password=="Admin"){
            this.router.transitionTo("admin")
            localStorage.setItem("currentUser",JSON.stringify(this.emailId))
        }
        else{
        localStorageUserData=JSON.parse(localStorage.getItem("DoorUserDatas")).AllData
        console.log(localStorageUserData)
        for (let i = 0; i <=localStorageUserData.length-1; i++) {
            console.log(localStorageUserData[i].Email)
            if(localStorageUserData[i].Email==this.emailId || localStorageUserData[i].UserId==this.emailId){
                if(localStorageUserData[i].pass==this.password){
                console.log("hiiiii")
                localStorage.setItem("currentUser",JSON.stringify(localStorageUserData[i].UserId));
                this.router.transitionTo("homePage")
                }
                else{
                    console.log("youe pass is incorrect")
                   
                }
            }
          
            
        }
    } 
}

    }
    @action
    back(){
        this.router.transitionTo("index")
    }
}
