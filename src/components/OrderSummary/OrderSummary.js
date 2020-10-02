import React, { Component } from 'react'
import './Button.css'

class OrderSummary extends Component{
   
    render(){
        const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
        return <li><span style={{textTransform: "capitalize"}}>{igKey}</span>: {this.props.ingredients[igKey]}</li>
        })

        console.log("order summmary",this.props.ingredientSummary)

        return(
            <div>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.totalPrice}</strong></p>
                <p>Continue to Checkout</p>
                
                <button className="Danger Button" onClick={this.props.onCancel}>Cancel</button>
                <button className="Success Button" onClick={this.props.onContinue}>Continue</button>
                
            </div>
        )
    }
}
export default OrderSummary;