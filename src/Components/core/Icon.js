import React from 'react';

const Icon = ({ name='DEMO-ICON', stylesheetClass=[], gradient="rgb(0, 0, 0)" }) => {
        const className = ["material-icons"];     
              
        if (  stylesheetClass && stylesheetClass.length > 0 ){
                className.push(...stylesheetClass)
        }else{
                console.warn("BUTTON:\nattribute 'stylesheetClass' is empty...");
        }

        if ( name === 'DEMO-ICON' ||  name.length < 1 ){
                console.error("ICON:\nattribute 'name' is empty ...\nauto injection default 'DEMO ICON' ");
        }

        return(
                <span className={className.join(" ")} style={{color : gradient}}>
                        {name}
                 </span>       
        );
};

export default Icon;