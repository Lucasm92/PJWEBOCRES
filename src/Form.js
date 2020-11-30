
import React,{useState} from 'react';

const Form = (props) => {




    return (
        <form onSubmit={props.getWeather}>
            <input
            type='text'
            placeholder='city'
            name='city'
            />

            <button class='btn btn-primary' >
                Submit
            </button> 
        </form>
    )
}

export default Form; 