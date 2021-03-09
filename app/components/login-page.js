import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class LoginPageComponent extends Component {
    @service router;
    @tracked user="1"
    @tracked Admin="0"
    @tracked num=0;
    @tracked currentUser="User"
    @action
    addnum(){
        this.num=this.num+1;
    }
    @action
    login(){
        var localStorageUserData=JSON.parse(localStorage.getItem("DoorUserDatas"))
        if(localStorageUserData!=null){
        if(this.emailId=="Admin" && this.password=="Admin" && this.currentUser=="Admin" ){
            this.router.transitionTo("admin")
            localStorage.setItem("currentUser",JSON.stringify(this.emailId))
        }
        else{
        localStorageUserData=JSON.parse(localStorage.getItem("DoorUserDatas")).AllData
        for (let i = 0; i <=localStorageUserData.length-1; i++) {
            if(localStorageUserData[i].Email==this.emailId || localStorageUserData[i].UserId==this.emailId){
                if(localStorageUserData[i].pass==this.password){
                localStorage.setItem("currentUser",JSON.stringify(localStorageUserData[i].UserId));
                this.router.transitionTo("homePage")
                }
                else{
                   
                }
            }   
          
            
        }
    } 
}

    }
    @action
    back(){
        this.router.transitionTo("index");
    }
    @action
    onChangeColor(a){
        this.currentUser=a
        if(a=="User"){
            this.user="1";
            this.Admin="0";
        }
        else{
            this.user="0";
            this.Admin="1";
        }
    }
}
