import React from 'react';

import Icon from './core/Icon';

import Slider from './core/Slider';

const Temperature = ({ min, max, temperature, onChange, rbg }) => {
    return (
        <div className="box col-md-3 col-6 text-center align-self-center">
            <Icon name="wb_sunny" stylesheetClass={["sunny"]} gradient={rbg} />
            <p>{temperature} °C</p>
            <Slider 
                min={min} 
                max={max} 
                onChange={onChange} 
                value={temperature} 
            />
        </div>
    );
};
export default Temperature;