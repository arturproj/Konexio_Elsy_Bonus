import React from 'react';

import Icon from './core/Icon';
import Toggle from './core/Toggle';
import Button from './core/Button';

import Slider from './core/Slider';

const Person = ({ min, max, steps, onChange, toggle, btnInc, btnDec }) => {
    return (
        <div className="box col-md-3 col-6 text-center" style={{display : "grid"}}>
            <Toggle name={toggle.gender} onClickAction={toggle.action} value={toggle.value} />
            <Icon name="directions_walk" stylesheetClass={[toggle.gender]} gradient="" />
            <p>{steps} STEPS</p>
            <Slider 
                min={min} 
                max={max} 
                onChange={onChange} 
                value={steps} 
            />
            <Button stylesheetClass={["btn-success","font-weight-bold","w-100","mt-2"]} name="+ 1000" action={btnInc} />
            <Button stylesheetClass={["btn-danger","font-weight-bold","w-100","mt-2"]} name="- 1000" action={btnDec} />
        </div>
    );
};
export default Person;