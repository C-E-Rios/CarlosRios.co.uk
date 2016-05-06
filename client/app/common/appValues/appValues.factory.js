let AppValues = function () {
    const app = {
        menu: false,
        introAnimation: false,
        introAnimationComplete : false
    };

    let getAppVars = () => {
        return appVars;
    };
    
    return {
        app, 
        getAppVars
    };
};

export default AppValues;
