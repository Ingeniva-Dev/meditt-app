import React, {useReducer, useState} from "react";
import styles from './exercises.module.css';
import DropDown from "../../../Common/DropDown";
import Button from "../../../UI/Button";

const exercisesData = [
    {
        title: 'Hour',
    },
    {
        title: 'Day',
    },
    {
        title: 'Week',
    },
    {
        title: 'Month',
    },

];

const initialState = {
    duration: {
        inputVal: '',
        selectVal: '',
    },
    schedule: {
        inputVal: '',
        selectVal: '',
    },

};

const reducer = (state, action) => {
    switch (action.type) {
        case 'durSelectVal':
            return {
                ...state,
                duration: {
                    ...state.duration,
                    selectVal: action.payload,
                }
            };
        case 'durInputVal':
            return {
                ...state,
                duration: {
                    ...state.duration,
                    inputVal: action.payload,
                }
            };
        case 'schSelectVal':
            return {
                ...state,
                schedule: {
                    ...state.schedule,
                    selectVal: action.payload,
                }
            };
        case 'schInputVal':
            return {
                ...state,
                schedule: {
                    ...state.schedule,
                    inputVal: action.payload,
                }
            };
        default:
            return state
    }
}


export default (props) => {


    const [state, dispatch] = useReducer(reducer, initialState);


    const valuesChangeHandler = (value, type) => {
        dispatch({type: type, payload: value})
    };



    const exercises = props.data.map((item, index) =>
        <div
            key={index}
            className={styles['exercises-item']}
        >
            <span className={styles['exercises-name']}>{item.name}</span>
            <div className={styles['middle-container']}>
                <div>
                    <span>Duration</span>
                    <div className={styles['exercises-fields']}>
                        <input placeholder='6' onChange={(evt) => valuesChangeHandler(evt.target.value, 'durInputVal')}/>
                        <DropDown
                            data={{
                                dropMenuItems: exercisesData,
                                placeholder: 'Week'
                            }}
                            onValueChange={(val) => valuesChangeHandler(val, 'durSelectVal')}
                        />
                    </div>

                </div>
                <div>
                    <span>Schedule</span>
                    <div className={styles['exercises-fields']}>
                        <input placeholder='6'  onChange={(evt) => valuesChangeHandler(evt.target.value, 'schInputVal')}/>
                        <span className={styles['pr']}>pr</span>
                        <DropDown
                            data={{
                                dropMenuItems: exercisesData,
                                placeholder: 'Week'
                            }}
                            onValueChange={(val) => valuesChangeHandler(val, 'schSelectVal')}
                        />
                    </div>
                </div>
                <div className={styles['button-container']}>
                    <Button className={styles['add-btn']} onClick={() => props.onPlanDataChange(state)}>ADD</Button>
                </div>
            </div>
        </div>
    )


    return (
        <div className={styles['exercises-container']}>
            <span className={styles['title']}>Exercises</span>
            {exercises}
        </div>
    )
}