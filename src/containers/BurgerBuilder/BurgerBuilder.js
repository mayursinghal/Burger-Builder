import React, { Component } from 'react'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';

const Ingredient_Prices = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            meat: 0,
            bacon: 0
        },
        totalPrice: 4,
        purchasable: false
    }
    addIngredientHandler = (type) => {
        
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceAddition = Ingredient_Prices[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        })
        this.updatePurchasableState(updatedIngredients)
    }
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount -1 ;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceDeduction = Ingredient_Prices[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        })
        this.updatePurchasableState(updatedIngredients)
    }
    updatePurchasableState = (ingredients) => {
        const sum = Object.keys(ingredients).map((keys) => ingredients[keys]).reduce((sum,el) => {
            return sum + el;
        },0)
        this.setState({
            purchasable: sum > 0
        })
    }
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <=0 ? true : false;
        }
        return (
            <div>
                {console.log(disabledInfo)}
                <Burger ingredients={this.state.ingredients} />
                <BuildControls addIngredientHandler={this.addIngredientHandler} removeIngredient={this.removeIngredientHandler} disabled={disabledInfo}
                totalPrice={this.state.totalPrice} purchasable={this.state.purchasable}/>
                {console.log("skjhs",this.state.purchasable)}
            </div>
        );
    }

}

export default BurgerBuilder;