import React, { Component } from 'react';

class Button extends Component{

    render(){  
        
        const className = ["btn"];               
        const remoteClass = this.props.stylesheetClass;
        if (  remoteClass && remoteClass.length > 0 ){
                remoteClass.forEach(this_class => {
                        className.push(this_class);
                });
        }else{
                console.warn("BUTTON:\nattribute 'stylesheetClass' is empty...");
        }
//
        const button_name = this.props.name;
        if ( !button_name || button_name === ''){
                console.error("BUTTON:\nattribute 'name' is empty ...\nauto injection default 'CLICK ME' ");
        }
//                   
        return(
            <button type="button" className={className.join(" ")} onClick={this.props.action} >{button_name}</button>       
        );
    }

}

export default Button;