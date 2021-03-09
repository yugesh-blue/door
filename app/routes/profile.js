import Route from '@ember/routing/route';

export default class ProfileRoute extends Route {
    model(){
        var currentName=localStorage.getItem("CurrentProfileName")
        return currentName
    }
}
