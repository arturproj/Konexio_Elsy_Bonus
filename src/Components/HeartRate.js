import React from 'react';

import Icon from './core/Icon';

import Slider from './core/Slider';

const HeartRate = ({ min, max, heart, onChange }) => {
    return (
        <div className="box col-md-3 col-6 text-center align-self-center">
        <Icon name="favorite" stylesheetClass={["heart_rate"]} gradient="" />
        <p>{heart} BTM</p>
        <Slider 
            min={min} 
            max={max} 
            onChange={onChange} 
            value={heart} 
        />
    </div>
    );
};
export default HeartRate;