import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import css from './Burger.module.css';

const burger = (props) => {
    return(
        <div className={css.Burger}>  
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;