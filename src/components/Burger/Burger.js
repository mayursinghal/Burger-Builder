import React, { Component } from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import './Burger.css'

class Burger extends Component{
    render(){
    
        let transformedIngredient = Object.keys(this.props.ingredients)
                                    .map(igKey => {
                                        return [...Array(this.props.ingredients[igKey])].map((_, i) =>{
                                             return <BurgerIngredient key={igKey + i} type={igKey} />
                                        });
                                    })
                                    .reduce((arr, el) => {
                                        return arr.concat(el)
                                    },[]);
                                   
        if(transformedIngredient.length === 0){
            transformedIngredient = <p>Please start adding ingredients</p>
        }
            
        return(
            
        <div className="Burger">
            <BurgerIngredient type="bread-top"/>
            {transformedIngredient}
            <BurgerIngredient type="bread-bottom"/>
        </div>
        );
    }
}

export default Burger;