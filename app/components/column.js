import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ColumnComponent extends Component {
    @service router
    @action
    home(){
        this.router.transitionTo("homePage");

    } 
}
