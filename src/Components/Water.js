import React from 'react';

import Icon from './core/Icon';

const Water = ({ water }) => {
    return (
        <div className="box col-md-3 col-6 text-center">
            <Icon name="local_drink" stylesheetClass={["water"]} gradient="" />
            <p>{water} LT</p>
        </div>
    );
};
export default Water;