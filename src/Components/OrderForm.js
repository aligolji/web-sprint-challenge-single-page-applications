import React, { useState } from 'react';
import * as yup from 'yup';
import axios from 'axios';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .min(2, 'Must be at least 2 characters.')
        .required('Name is required.'),
    email: yup
        .string()
        .email('Must be a valid email address.')
        .required('Email is required.'),
    pizzaSize: yup.string(),
    grilledChicken: yup.boolean().oneOf([true, false]),
    onions: yup.boolean().oneOf([true, false]),
    greenPepper: yup.boolean().oneOf([true, false]),
    blackOlives: yup.boolean().oneOf([true, false]),
    roastedGarlic: yup.boolean().oneOf([true, false]),
    dicedTomatos: yup.boolean().oneOf([true, false]),
    artichokeHearts: yup.boolean().oneOf([true, false]),
    threeCheese: yup.boolean().oneOf([true, false]),
    pineapple: yup.boolean().oneOf([true, false]),
    extraCheese: yup.boolean().oneOf([true, false]),
    specialInstructions: yup.string()
})

function OrderForm() {

    const [pizzaOrder, setPizzaOrder] = useState({
        name: '',
        email: '',
        pizzaSize: '-select size-',
        grilledChicken: false,
        onions: false,
        greenPepper: false,
        blackOlives: false,
        roastedGarlic: false,
        dicedTomatos: false,
        artichokeHearts: false,
        threeCheese: false,
        pineapple: false,
        extraCheese: false,
        specialInstructions: ''
    })

    console.log(pizzaOrder)


    const [errorState, setErrorState] = useState({
        name: '',
        email: '',
        pizzaSize: '-select size-',
    })

    const validate = (e) => {
        yup.reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then(valid => {
                setErrorState({
                    ...errorState,
                    [e.target.name]: ''
                })
            })
            .catch(error => {
                console.log(error.errors)
                setErrorState({
                    ...errorState,
                    [e.target.name]: error.errors[0]

                })
            })
    }

    const changeHandler = (e) => {
        e.persist()
        validate(e)
        let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        setPizzaOrder({ [e.target.name]: value });
    };

    const orderSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted');
        axios
            .post('https://reqres.in/api/users', pizzaOrder)
            .then(response => {
                setPizzaOrder([response.data])
                console.log(response.data)
            })
            .catch(error => console.log(error));
    };

    return (
        <div className='form-container'>
            <form onSubmit={orderSubmit}>
                <div className='form-header'>

                    <h2>Order Your Custom Pizza</h2>
                    <h3>Eater Info</h3>

                    <label htmlFor='name'>
                        Name
                        <input
                            type='text'
                            name='name'
                            placeholder='Enter your name'
                            value={pizzaOrder.name}
                            onChange={changeHandler}
                        />
                        {errorState.name.length > 0 ? <p className='error'>{errorState.name}</p> : null}
                    </label>
                    <label htmlFor='email'>
                        Email
                        <input
                            type='text'
                            name='email'
                            placeholder='Email address'
                            value={pizzaOrder.email}
                            onChange={changeHandler}
                        />
                        {errorState.email.length > 0 ? <p className='error'>{errorState.email}</p> : null}
                    </label>
                </div>

                <div className='form-build pizza'>

                    <h3>Customize</h3>

                    <div className='pizza-size'>
                        <label htmlFor='pizzaSize'>
                            Choose a Size
                            {/*DROPDOWN*/}
                            <select
                                name='pizzaSize'
                                value={pizzaOrder.pizzaSize}
                                onChange={changeHandler}
                            >

                                <option value=''>-select size-</option>
                                <option value='small'>Small</option>
                                <option value='medium'>Medium</option>
                                <option value='large'>Large</option>
                            </select>
                        </label>

                    </div>
                    <div className='toppings'>
                        <label htmlFor='grilledChicken'>
                            <input
                                type='checkbox'
                                name='grilledChicken'
                                checked={pizzaOrder.grilledChicken}
                                onChange={changeHandler}
                            />
                            Grilled Chicken
                        </label>
                        <label htmlFor='Onions'>
                            <input
                                type='checkbox'
                                name='onions'
                                checked={pizzaOrder.onions}
                                onChange={changeHandler}
                            />
                            Onions
                        </label>

                        <label htmlFor='greenPepper'>
                            <input
                                type='checkbox'
                                name='greenPepper'
                                checked={pizzaOrder.greenPepper}
                                onChange={changeHandler}
                            />
                            Green Pepper
                        </label>

                        <label htmlFor='blackOlives'>
                            <input
                                type='checkbox'
                                name='blackOlives'
                                checked={pizzaOrder.blackOlives}
                                onChange={changeHandler}
                            />
                            Black Olives
                        </label>

                        <label htmlFor='roastedGarlic'>
                            <input
                                type='checkbox'
                                name='roastedGarlic'
                                checked={pizzaOrder.roastedGarlic}
                                onChange={changeHandler}
                            />
                            Roasted Garlic
                        </label>

                        <label htmlFor='dicedTomatos'>
                            <input
                                type='checkbox'
                                name='dicedTomatos'
                                checked={pizzaOrder.dicedTomatos}
                                onChange={changeHandler}
                            />
                            Diced Tomatos
                        </label>

                        <label htmlFor='artichokeHearts'>
                            <input
                                type='checkbox'
                                name='artichokeHearts'
                                checked={pizzaOrder.artichokeHearts}
                                onChange={changeHandler}
                            />
                            Artichoke Hearts
                        </label>

                        <label htmlFor='threeCheese'>
                            <input
                                type='checkbox'
                                name='threeCheese'
                                checked={pizzaOrder.threeCheese}
                                onChange={changeHandler}
                            />
                            Three Cheese
                        </label>

                        <label htmlFor='pineapple'>
                            <input
                                type='checkbox'
                                name='pineapple'
                                checked={pizzaOrder.pineapple}
                                onChange={changeHandler}
                            />
                            Pineapple
                        </label>

                        <label htmlFor='extraCheese'>
                            <input
                                type='checkbox'
                                name='extraCheese'
                                checked={pizzaOrder.extraCheese}
                                onChange={changeHandler}
                            />
                            Extra Cheese
                        </label>


                    </div>
                    <div className='special-instructions'>
                        <label htmlFor='specialInstructions'>

                            <textarea
                                name='specialInstructions'
                                placeholder='Please type any special instructions.'
                                value={pizzaOrder.specialInstructions}
                                onChange={changeHandler}

                            />


                        </label>
                    </div>
                    <div className='submit-button'>
                        <h3>Place Your Order</h3>
                        <button type='submit'>Bake the Pizza</button>
                    </div>
                </div>
            </form>

        </div>
    );
}



export default OrderForm;