import React from 'react';

const Button = ({ name='DEMO', stylesheetClass=[], action={} }) => {
        const className = ["btn"];     
              
        if (  stylesheetClass && stylesheetClass.length > 0 ){
                className.push(...stylesheetClass)
        }else{
                console.warn("BUTTON:\nattribute 'stylesheetClass' is empty...");
        }

        if ( name !== 'DEMO' ||  name.length <= 1 ){
                console.error("BUTTON:\nattribute 'name' is empty ...\nauto injection default 'CLICK ME' ");
        }

        return(
                <button type="button" className={className.join(" ")} onClick={action} >{name}</button>       
        );
};

export default Button;