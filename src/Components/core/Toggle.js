import React from 'react';

const Toggle = ({ name="DEMO", onClickAction={}, value=true }) => {    
    return(
        <div className="custom-control custom-switch d-flex justify-content-start">
            <input type="checkbox" className="custom-control-input" id="customSwitch1" onChange={onClickAction} value={value} />
            <label className="custom-control-label" htmlFor="customSwitch1">{name}</label>
        </div>   
    );
};
export default Toggle;