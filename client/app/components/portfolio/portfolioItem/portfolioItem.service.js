class PortfolioService {
    constructor () {
    }
 
    getHoverDirection (element, coordinates) {

        // credits : http://stackoverflow.com/a/3647634
        let _element = element[0];
        var w = _element.clientWidth,
            h = _element.clientHeight,
            x = (coordinates.x - _element.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1),
            y = (coordinates.y - _element.offsetTop - (h / 2)) * (h > w ? (w / h) : 1),
            direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
        
        return direction;        
    }
    
    getAnimationDirection (direction) {
        
        let slideFromTop = {
                top: '-100%',
                left: '0'
            },
            slideFromBottom = {
                top: '100%',
                left: '0'
            },
            slideFromLeft = {
                left: '-100%',
                top: '0'
            },
            slideFromRight = {
                left: '100%',
                top: '0'
            },
            slideTop = {
                top: '0',
                left: '0'
            },
            slideLeft = {
                left: '0',
                top: '0'
            },
            fromStyle, toStyle, start;

            switch (direction) {
            case 0:
                // from top
                start = 'from top';
                fromStyle = slideFromTop;
                toStyle = slideTop;
                break;
            case 1:
                // from right
                start = 'from right';
                fromStyle = slideFromRight;
                toStyle = slideLeft;
                break;
            case 2:
                // from bottom
                start = 'from bottom';
                fromStyle = slideFromBottom;
                toStyle = slideTop;
                break;
            case 3:
                // from left
                start = 'from left';
                fromStyle = slideFromLeft;
                toStyle = slideLeft;
                break;
            }

            return {
                from: fromStyle,
                to: toStyle,
                start: start
            };       
    }
    
    hoverEnter (element, event) {
        
        const tl = new TimelineLite();
        
        let hoverDirection = this.getHoverDirection(element, {
                x: event.pageX,
                y: event.pageY
            }),
            animationDirection = this.getAnimationDirection(hoverDirection), 
            overlay = angular.element(element[0].querySelectorAll('.item-description')); 
        
        tl.fromTo(overlay, 0.5, {
            css: {
                left: animationDirection.from.left,
                top: animationDirection.from.top                 
            }
        }, {
            css: {
                left: animationDirection.to.left,
                top: animationDirection.to.top,
                // clearProps: 'transform'
            }
        });     
            
    }
    
    hoverLeave (element, event) {
        
        const tl = new TimelineLite();
        
        let hoverDirection = this.getHoverDirection(element, {
                x: event.pageX,
                y: event.pageY
            }),
            animationDirection = this.getAnimationDirection(hoverDirection), 
            overlay = angular.element(element[0].querySelectorAll('.item-description')); 
        
        tl.fromTo(overlay, 0.5, {
            css: {
                left: animationDirection.to.left,
                top: animationDirection.to.top
            }
        }, {
            css: {
                left: animationDirection.from.left,
                top: animationDirection.from.top,
                clearProps: 'all'                                 
            }            
        });     
            
    }    
    
    
    
}

export default PortfolioService;
