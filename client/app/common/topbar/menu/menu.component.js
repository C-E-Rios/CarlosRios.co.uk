import template from './menu.html';
import controller from './menu.controller';
import './menu.scss';

let menuComponent = {
    require: {
        topbar: '^topbar'
    },
    template,
    controller
};

export default menuComponent;
