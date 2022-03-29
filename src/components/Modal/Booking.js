import React, {useContext} from "react";
import Context from "../../context/context";
import styles from './Booking.module.css';
import Select from "../UI/Select";
import Input from "../UI/Input";
import Button from "../UI/Button";
import useSelect from "../../hooks/use-select";
import useInput from "../../hooks/use-input";
import useValidation from "../../hooks/use-validation";
import {locationSelect, practitionerSelect, patientSelect} from "../DummyData";

const Booking = (props) => {

    const {isTime, isEmpty} = useValidation();

    const {
        value: patientValue,
        isValid:patientIsValid,
        valueChangeHandler: patientChangeHandler
    } = useSelect(isEmpty);
    const {
        value: practitionerValue,
        isValid:practitionerIsValid,
        valueChangeHandler: practitionerChangeHandler
    } = useSelect(isEmpty);
    const {
        value: locationValue,
        isValid:LocationIsValid,
        valueChangeHandler: locationChangeHandler
    } = useSelect(isEmpty);
    const {
        value: dateValue,
        isValid:dateIsValid,
        datePikerChangeHandler: dateChangeHandler
    } = useSelect(isEmpty);
    let {
        value:fromValue,
        isValid:fromIsValid,
        hasError:fromHasError,
        valueChangeHandler:fromValueChangeHandler,
    } = useInput(isTime, {type:'time'});
    const {
        value:toValue,
        isValid:toIsValid,
        hasError:toHasError,
        valueChangeHandler:toValueChangeHandler,
    } = useInput(isTime, {type:'time'});

    const context = useContext(Context);


    const convertToMilliseconds = (value) => {
        const [hour, min] = value.split(':');
        return (hour * 60 * 60 + min * 60) * 1000;
    };

    let formIsValid = false;
    if (fromIsValid && toIsValid && practitionerIsValid && patientIsValid && dateIsValid) {
        formIsValid = true;
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if(!formIsValid) {
            return
        }
        const startTime = dateValue.getTime() + convertToMilliseconds(fromValue);
        const endTime = dateValue.getTime() + convertToMilliseconds(toValue);
        context.addEventsToAll({title:patientValue,start: new Date(startTime), end: new Date(endTime)});
        props.onClick()
    };

    return (
        <div className={styles['container']}>
            <div>
                New Booking
            </div>
            <form onSubmit={submitHandler}>
                <Select
                    title='Patient'
                    placeholder='Select Patient'
                    createNew='+ Create new patient'
                    optionData={patientSelect}
                    // value={patientValue}
                    select={{
                        onChange: patientChangeHandler,
                        value: patientValue
                    }}
                />
                <Select
                    title='Practitioner'
                        placeholder='Select Practitioner'
                    optionData={practitionerSelect}
                    select={{
                        onChange: practitionerChangeHandler,
                        value: practitionerValue
                    }}
                />
                <Select
                    title='Location'
                    placeholder='Select Location'
                    optionData={locationSelect}
                    select={{
                        onChange: locationChangeHandler,
                        value: locationValue
                    }}
                />
                <Select
                    title='Date'
                    placeholder='Select Date'
                    type='date'
                    select={{
                        onChange: dateChangeHandler,
                        value: dateValue
                    }}
                />
                <div className={styles['inputs-container']}>
                    <Input
                        label='From'
                        input={{
                            maxLength:"5",
                            placeholder: '00:00',
                            onChange:fromValueChangeHandler,
                            className:'booking-input'
                        }}
                    />
                    <Input
                        label='To'
                        input={{
                            maxLength:"5",
                            placeholder: '00:00',
                            onChange:toValueChangeHandler,
                            className:'booking-input'
                        }}
                    />
                </div>
                <div className={styles.comments}>
                    <label htmlFor='comments'>Comment</label>
                    <textarea id='comments' placeholder='Add Comment'/>
                </div>

                <div className={styles['buttons-container']}>
                    <Button className={styles['button-cancel']} onClick={props.onClick}>
                        Cancel
                    </Button>
                    <Button type='submit' disabled={!formIsValid}>
                        Add Booking
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default Booking