import React from 'react';

const menu = (props) => {
    return(
        <div onClick={props.toggle}>
            {props.children}
        </div>
    );
}

export default menu;