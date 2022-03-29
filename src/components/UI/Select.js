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
                // className={'input' + (focused ? ' ' : '')}
                input={{
                    ...inputProps,
                    placeholder:'Select Date',
                    className:'booking-input'
                }}
            />
        )}
    </DatePicker>;

    const options = props.optionData && props.optionData.map((item, index) => <option
    key={index}
    value={item.text}
    >
        {item.text}
    </option>);


    return (
        <div className={'patient'}>
            <span>{props.title}</span>
            {props.type === 'date' ? datePiker :
                <select
                    {...props.select}
                    required
                >
                    <option value="" disabled selected> {props.placeholder}</option>
                    {options}
                </select>}
            {props.createNew && <span className='create-new'>+ Create new patient</span>}
        </div>
    );
}

export default Select




