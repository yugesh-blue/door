import Route from '@ember/routing/route';

export default class NotificationRoute extends Route {
    model(){
        var message=JSON.parse(localStorage.getItem("notification"))
        return message

    }
}
