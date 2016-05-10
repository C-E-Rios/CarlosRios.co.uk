import template from './portfolioItem.html';
import controller from './portfolioItem.controller';
import './portfolioItem.scss';

let portfolioItemComponent = {
    bindings: {
        itemTitle: '<',
        description: '<',
        bgImgSrc: '<',
        state: '<'
    },
    template,
    controller
};

export default portfolioItemComponent;
