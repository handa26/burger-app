import React from 'react';
import css from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavigationItems/NavItems';
// import Menu from '../Menu/Menu';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className={css.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <Logo />
        <nav className={css.Desktop}>
            <NavItems />
        </nav>
    </header>
);

export default toolbar;