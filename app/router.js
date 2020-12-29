import EmberRouter from '@ember/routing/router';
import config from 'door/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
  
}

Router.map(function() {
  this.route('register');
  this.route('homePage',{ path: '/home' });
  this.route('admin')
  this.route('login',{path:'/loginPage'});
  this.route('editBox');
  this.route('notification',{path:'/message'});
});



