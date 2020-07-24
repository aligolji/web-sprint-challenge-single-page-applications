import React, { useState } from 'react';
import * as yup from 'yup';
import axios from 'axios';


function OrderForm() {

    const [pizzaOrder, setPizzaOrder] = useState({
        name: '',
        email: '',
        pizzaSize: '-select size-',
        toppings: {
            grilledChicken: false,
            onions: false,
            greenPepper: false,
            blackOlives: false,
            roastedGarlic: false,
            dicedTomatos: false,
            artichokeHearts: false,
            threeCheese: false,
            pineapple: false,
            extraCheese: false
        },
        specialInstructions: ''

    })

    const [errorState, setErrorState] = useState({
        name: '',
        email: '',
        pizzaSize: '-select size-',
    })




    return (
        <div className='form-container'>
            <form>
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
                            onChange=''

                        />
                    </label>
                    <label htmlFor='email'>
                        Email
                        <input
                            type='text'
                            name='email'
                            placeholder='Email address'
                            value={pizzaPrder.email}
                            onChange=''

                        />
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
                                onChange=''
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
                                onChange=''
                            />
                            Grilled Chicken
                        </label>
                        <label htmlFor='Onions'>
                            <input
                                type='checkbox'
                                name='onions'
                                checked={pizzaOrder.onions}
                                onChange=''
                            />
                            Onions
                        </label>

                        <label htmlFor='greenPepper'>
                            <input
                                type='checkbox'
                                name='greenPepper'
                                checked={pizzaOrder.greenPepper}
                                onChange=''
                            />
                            Green Pepper
                        </label>

                        <label htmlFor='blackOlives'>
                            <input
                                type='checkbox'
                                name='blackOlives'
                                checked={pizzaOrder.blackOlives}
                                onChange=''
                            />
                            Black Olives
                        </label>

                        <label htmlFor='roastedGarlic'>
                            <input
                                type='checkbox'
                                name='roastedGarlic'
                                checked={pizzaOrder.roastedGarlic}
                                onChange=''
                            />
                            Roasted Garlic
                        </label>

                        <label htmlFor='dicedTomatos'>
                            <input
                                type='checkbox'
                                name='dicedTomatos'
                                checked={pizzaOrder.dicedTomatos}
                                onChange=''
                            />
                            Diced Tomatos
                        </label>

                        <label htmlFor='artichokeHearts'>
                            <input
                                type='checkbox'
                                name='artichokeHearts'
                                checked={pizzaOrder.artichokeHearts}
                                onChange=''
                            />
                            Artichoke Hearts
                        </label>

                        <label htmlFor='threeCheese'>
                            <input
                                type='checkbox'
                                name='threeCheese'
                                checked={pizzaOrder.threeCheese}
                                onChange=''
                            />
                            Three Cheese
                        </label>

                        <label htmlFor='pineapple'>
                            <input
                                type='checkbox'
                                name='pineapple'
                                checked={pizzaOrder.pineapple}
                                onChange=''
                            />
                            Pineapple
                        </label>

                        <label htmlFor='extraCheese'>
                            <input
                                type='checkbox'
                                name='extraCheese'
                                checked={pizzaOrder.extraCheese}
                                onChange=''
                            />
                            Extra Cheese
                        </label>


                    </div>
                    <div className='special-instructions'>
                        <label htmlFor='specialInstructions'>

                            <textarea
                                name='specialInstructions'
                                placeholder='Please type any special instructions.'
                                value=''
                                onChange=''

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