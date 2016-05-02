import template from './burger.html';
import controller from './burger.controller';
import './burger.scss';

let burgerComponent = {
    require: {
        app: '^app'
    },
    bindings: {},
    template,
    controller
};

export default burgerComponent;
