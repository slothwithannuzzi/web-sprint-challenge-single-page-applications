import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function PizzaForm(props) {

    const {
        values,
        submit,
        change,
        disabled,
        errors,
      } = props
    
      const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }
    
      const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const inputValue = type === "checkbox" ? checked : value
        change(name, inputValue)
      }



    return (
        <div>
            <h2>Build Your Own Pizza</h2>
            <form id = 'pizza-form' onSubmit = {onSubmit}>
                <h3>Choice of Size:</h3>
                <label>
                    <select id = 'size-dropdown' onChange = {onChange} value = {values.size} name = 'size'>
                        <option value = ''>- Select an option -</option>
                        <option value = 'small'>Small - 10"</option>
                        <option value = 'medium'>Medium - 12"</option>
                        <option value = 'large'>Large - 14"</option>
                        <option value = 'x-large'>X-Large - 16"</option>
                    </select>
                </label>
                <h3>Choice of Sauce:</h3>
                <label>
                    <input type = 'radio' value = 'original-red' name = 'sauce'  onChange = {onChange}/>
                    Original Red
                </label>
                <label>
                    <input type = 'radio' value = 'garlic-ranch' name = 'sauce' onChange = {onChange}/>
                    Garlic Ranch
                </label>
                <label>
                    <input type = 'radio' value = 'BBQ' name = 'sauce' onChange = {onChange}/>
                    BBQ Sauce
                </label>
                <label>
                    <input type = 'radio' value = 'spinach-alfredo' name = 'sauce' onChange = {onChange}/>
                    Spinach Alfredo
                </label>
                
                    <h3>Add Toppings:</h3>
                    <div className = 'toppings-container'>
                    <label>
                        Pepperoni
                        <input type = 'checkbox' name = 'pepperoni' checked = {values.pepperoni} onChange = {onChange}/>
                    </label>
                    <label>
                        Sausage
                        <input type = 'checkbox' name = 'sausage' checked = {values.sausage} onChange = {onChange}/>
                    </label>
                    <label>
                        Jalapeno
                        <input type = 'checkbox' name = 'jalapeno' checked = {values.jalepno} onChange = {onChange}/>
                    </label>
                    <label>
                        Goat Cheese
                        <input type = 'checkbox' name = 'goatCheese' checked = {values.goatCheese} onChange = {onChange}/>
                    </label>
                    <label>
                        Bacon
                        <input type = 'checkbox' name = 'bacon' checked = {values.bacon} onChange = {onChange}/>
                    </label>
                    <label>
                        Anchovies
                        <input type = 'checkbox' name = 'anchovies' checked = {values.anchovies} onChange = {onChange}/>
                    </label>
                </div>
                <h3>Choice of Substitute:</h3>
                <label>
                    <input type = 'checkbox' name = 'glutenFree' onChange = {onChange}/>
                    Gluten Free Crust (+ $1.00)
                </label>
                <h3>Name for your order</h3>
                <label>
                    <input id ='name-input' type ='text' name = 'name' value = {values.name} onChange = {onChange} />
                </label>
                <h3>Special Instructions</h3>
                <label>
                    <input id = 'special-text' type= 'text' name ='instructions' value = {values.instructions} onChange = {onChange}/>
                </label>
                <button id = 'order-button' disabled = {disabled}>Add to Order</button>
                <div>{errors.name}</div>
            </form>
        </div>
    )
}