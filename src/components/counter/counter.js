import React from 'react'
import { decrement, increment } from '../../redux/state/counter/counterSlice'

import {useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';



const Counter = () => {

    const count = useSelector((state) =>  state.counter.value);
    const dispatch = useDispatch();
    
    return (
        <div> 
        
        Hello counter

        <h2> {count} </h2>

        <button onClick={()=> {dispatch(increment())}}>increase</button>
        <button onClick={()=>{dispatch(decrement())}}>decrease</button>
        
        
        </div>
    )
}

export default Counter;
