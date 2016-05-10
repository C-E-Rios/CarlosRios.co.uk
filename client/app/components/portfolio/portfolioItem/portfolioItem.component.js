import template from './portfolioItem.html';
import controller from './portfolioItem.controller';
import './portfolioItem.scss';

let portfolioItemComponent = {
    bindings: {
        title: '<',
        description: '<',
        bgImgSrc: '<',
        state: '<'
    },
    template,
    controller
};

export default portfolioItemComponent;
