import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ImageSettingComponent extends Component {

    @tracked imageSrc;
    @action
    a(){
            console.log("hii")   
    }
    init(){
        super.init(...arguments);
        console.log("hii")
    }
}
