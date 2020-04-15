import React from 'react';
import css from './NavItems.module.css';
import NavItem from './NavItem/NavItem';

const navigationItems = (props) => (
    <ul className={css.NavItems}>
        <NavItem link="/" active>Burger Builder</NavItem>
        <NavItem link="/">Checkout</NavItem>
    </ul>
);

export default navigationItems;