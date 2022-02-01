import React, {useReducer} from "react";

const defaultState = {
    value: undefined,

}

const selectStateReducer = (state, action) => {

    if (action.type === 'SELECT') {
        return {value: action.value}
    }
    if (action.type === 'DATE_PIKER') {

        return {value:action.value}
    }
    return state;
};


const useSelect = (validateValue) => {

    const [selectState, dispatch] = useReducer(selectStateReducer, defaultState);

    const valueIsValid = validateValue(selectState.value);

    const valueChangeHandler = (event) => {
        dispatch({type: 'SELECT', value: event.target.value});
    }
    const datePikerChangeHandler = (date) => {
        dispatch({type: 'DATE_PIKER', value: date});
    }

    return {
        value: selectState.value,
        isValid:valueIsValid,
        valueChangeHandler,
        datePikerChangeHandler
    }

}

export default useSelect;