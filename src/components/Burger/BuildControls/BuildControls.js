import React, { Component } from 'react';
import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css'

class BuildControls extends Component{
    render(){
        const controls = [
            {label: 'salad', type: 'salad'},
            {label: 'cheese', type: 'cheese'},
            {label: 'bacon', type: 'bacon'},
            {label: 'meat', type: 'meat'}
        ]
        return(
            <div className="BuildControls">
                <p>Current Price: <strong>{this.props.totalPrice}</strong></p>
                {controls.map(ctrl => 
                    <BuildControl key={ctrl.label} label={ctrl.label} 
                    added={() => this.props.addIngredientHandler(ctrl.type)}
                    removed={() => this.props.removeIngredient(ctrl.type)}
                    disabled={this.props.disabled[ctrl.type]}/>)}
                <button className="OrderButton">ORDER NOW</button>
            </div>
        )
    }
}

export default BuildControls;