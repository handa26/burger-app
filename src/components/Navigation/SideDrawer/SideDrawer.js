import React from 'react';
import css from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavigationItems/NavItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const sideDrawer = (props) => {
    let attachStyle = [css.SideDrawer, css.Close];
    if(props.open) {
        attachStyle = [css.SideDrawer, css.Open];
    }

    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachStyle.join(' ')}>
                <Logo height="11%" />
                <nav>
                    <NavItems />
                </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;