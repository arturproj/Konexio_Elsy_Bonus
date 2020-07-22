import React from 'react';

import Icon from './core/Icon';
import Toggle from './core/Toggle';
import Button from './core/Button';

import Slider from './core/Slider';

class Person extends React.Component{

    render(){
        return(
            <div className="box col-md-3 col-6 text-center" style={{display : "grid"}}>
                <Toggle name={this.props.toggle.gender} onClickAction={this.props.toggle.action} value={this.props.toggle.value} />
                <Icon name="directions_walk" stylesheetClass={[this.props.toggle.gender]} gradient="" />
                <p>{this.props.steps} STEPS</p>
                <Slider 
                    min={this.props.min} 
                    max={this.props.max} 
                    onChange={this.props.onChange} 
                    value={this.props.steps} 
                />
                <Button stylesheetClass={["btn-success","font-weight-bold","w-100","mt-2"]} name="+" action={this.props.btnInc} />
                <Button stylesheetClass={["btn-danger","font-weight-bold","w-100","mt-2"]} name="-" action={this.props.btnDec} />
            </div>
        );
    }

}

export default Person;