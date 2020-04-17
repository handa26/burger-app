import React from 'react';
import css from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavigationItems/NavItems';

const sideDrawer = (props) => {
    return(
        <div className={css.SideDrawer}>
            <Logo />
            <nav>
                <NavItems />
            </nav>
        </div>
    );
}

export default sideDrawer;