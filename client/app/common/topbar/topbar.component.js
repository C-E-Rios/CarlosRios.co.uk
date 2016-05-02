import template from './topbar.html';
import controller from './topbar.controller';
import './topbar.scss';

let topbarComponent = {
    require: {
        app: '^app'
    },
    template,
    controller
};

export default topbarComponent;
