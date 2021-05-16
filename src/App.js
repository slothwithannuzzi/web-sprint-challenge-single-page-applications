import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from 'react-router-dom'
import './App.css'
import * as yup from 'yup'
import Home from './components/Home'
import PizzaForm from './components/PizzaForm'
import { schema } from './components/formSchema'

const initialValues = {
  //name for order
  name: '',
  //dropdown
  size: '',
  //radio buttons
  sauce: '',
  //topping checkboxes
  pepperoni: false,
  sausage: false,
  Jalapeno: false,
  goatCheese: false,
  bacon: false,
  anchovies: false,
  //substitute checkbox
  glutenFree: false,
  //special instructions
  instructions: '',  
}
const initialErrors = {
  size: '',
  sauce: '',
}

const initialDisabled = true;

const App = () => {

  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState(initialErrors)
  const [disabled, setDisabled] = useState(initialDisabled)
  const [pizzas, setPizzas] = useState([]);

  const inputChange = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(()=> setErrors({
      ...errors,
      [name]: ''
    }))
    .catch(err => setErrors({
      ...errors,
      [name]: value
    }))
    setValues({
      ...values,
      [name]: value
    })
  }
  const addOrder = order => {
    setPizzas([...pizzas, order])
  }

  const formSubmit = () => {
    const toppings = []
    Object.keys(values)
    .filter(key => key == 'pepperoni' || key == 'sausage' || 
    key == 'jalapeno' || key == 'goatCheese' || 
    key == 'bacon' || key =='anchovies')
    .forEach(key => {
      const value = values[key]
      if(value) {
        toppings.push(key)
      }
    })
    const newPizza = {
      name: values.name,
      size: values.size,
      sauce: values.sauce,
      glutenFree: values.glutenFree,
      instructions: values.instructions,
      toppings,
    }
    addOrder(newPizza)
    console.log(newPizza)
    console.log(pizzas)
    setValues(initialValues)
  }

  useEffect(() => {
    schema.isValid(values)
    .then(valid => setDisabled(!valid))
  }, [values])

  return (
   <div>
     <nav>
       <h1>Lambda Pizzeria</h1>
       <div className = 'nav-links'>
         <Link className = 'nav-button' to = '/'>Home</Link>
         <Link className = 'nav-button' to = '/pizza'>Order Pizza</Link>
       </div>
     </nav>

    <Switch>
      <Route exact path = '/'>
        <Home/>
      </Route>
      <Route path = '/pizza'>
        <PizzaForm values = {values} change ={inputChange} submit = {formSubmit} disabled = {disabled} errors = {errors}/>
      </Route>
    </Switch>

   </div>
  );
};
export default App;
