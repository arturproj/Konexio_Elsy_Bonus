import React from 'react';

import RCSlider from 'rc-slider';

import 'rc-slider/assets/index.css';

const Slider = ({ min=0, max=100, onChange={}, value=1 }) => {    
    return(
        <RCSlider
            max={max} 
            min={min} 
            onChange={onChange} 
            value={value}
        />     
    );
};
export default Slider;
