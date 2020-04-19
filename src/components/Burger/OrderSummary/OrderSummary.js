import React, {Component} from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    // this component can be functional as well as class based
    componentWillUpdate() {
        console.log('[OrderSummary.js] componentWillUpdate running...');
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients) // Tranform into an Array
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>
            );
        })

        return(
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: ${this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>
                <Button btnType="Danger" clicked={this.props.cancel} >CANCEL</Button>
                <Button btnType="Success" clicked={this.props.continue} >CONTINUE</Button>
            </Aux>
        );
    }
}

export default OrderSummary;