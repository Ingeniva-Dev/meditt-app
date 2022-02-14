import './style.css';
import React, {useState} from "react";
import {enGB} from 'date-fns/locale'
import {DatePicker} from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import Input from "./Input";


const Select = (props) => {

    const [date, setDate] = useState();

    const changeHandler = (value) => {
         setDate(value)
         props.select.onChange(value)
    };

    const datePiker = <DatePicker date={date} onDateChange={changeHandler} locale={enGB}>
        {({inputProps, focused}) =>  (
            <Input
                className={'input' + (focused ? ' ' : '')}
                input={{
                    ...inputProps,
                    placeholder:'Select Date',
                    className:'booking-input'
                }}
            />
        )}
    </DatePicker>


    return (
        <div className={'patient'}>
            <span>{props.title}</span>
            {props.type === 'date' ? datePiker :
                <select
                    {...props.select}
                    required
                >
                    <option value="" disabled selected> {props.placeholder}</option>
                    <option value='Patient 1'>Patient 1</option>
                    <option value='Patient 2'>Patient 2</option>
                    <option value='Patient 3'>Patient 3</option>
                </select>}
            {props.createNew && <span className='create-new'>+ Create new patient</span>}
        </div>
    );
}

export default Select




