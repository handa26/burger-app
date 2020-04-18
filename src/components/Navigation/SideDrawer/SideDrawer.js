import React from 'react';
import css from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavigationItems/NavItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary';

const sideDrawer = (props) => {
    return(
        <Aux>
            <Backdrop show />
            <div className={css.SideDrawer}>
                <Logo height="11%" />
                <nav>
                    <NavItems />
                </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;