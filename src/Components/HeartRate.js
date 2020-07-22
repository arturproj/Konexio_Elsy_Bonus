import React from 'react';

import Icon from './core/Icon';

import Slider from './core/Slider';

class HeartRate extends React.Component{

    render(){
        return(
            <div className="box col-md-3 col-6 text-center">
                <Icon name="favorite" stylesheetClass={["heart_rate"]} gradient="" />
                <p>{this.props.heart} BTM</p>
                <Slider 
                    min={this.props.min} 
                    max={this.props.max} 
                    onChange={this.props.onChange} 
                    value={this.props.heart} 
                />
            </div>
        );
    }

}

export default HeartRate;