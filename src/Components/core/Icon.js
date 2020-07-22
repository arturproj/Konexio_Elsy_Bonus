import React from 'react';

const Icon = ({ name='DEMO', stylesheetClass=[], gradient="rgb(0, 0, 0)" }) => {
        const className = ["material-icons"];     
              
        if (  stylesheetClass && stylesheetClass.length > 0 ){
                className.push(...stylesheetClass)
        }else{
                console.warn("BUTTON:\nattribute 'stylesheetClass' is empty...");
        }

        if ( name !== 'DEMO' ||  name.length <= 1 ){
                console.error("BUTTON:\nattribute 'name' is empty ...\nauto injection default 'CLICK ME' ");
        }

        return(
                <span className={className.join(" ")} style={{color : gradient}}>
                        {name}
                 </span>       
        );
};

export default Icon;