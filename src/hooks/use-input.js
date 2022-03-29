import React, {useReducer} from "react";

const defaultState = {
    value: '',
    isTouched: false,
};

const inputReducer = (state, action) => {
    if (action.type === 'INPUT') {
        return {value: action.value, isTouched: state.isTouched}
    }

    return defaultState;
};

const useInput = (validateValue, config) => {
    const [inputState, dispatch] = useReducer(inputReducer, defaultState);

    const valueIsValid = validateValue(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;

    let timeOutId;

    const valueChangeHandler = (event) => {

            if (event.target.value.length === 2 &&
                config.type === 'time' &&
                !isNaN(event.target.value) &&
                inputState.value.length <= 1) {
                event.target.value += ':';
            }
            if (timeOutId !== undefined) {
                clearTimeout(timeOutId)
            }
            timeOutId = setTimeout(() => {
                dispatch({type: 'INPUT', value: event.target.value});
            }, 400);
    };

    return {
        value:inputState.value,
        isValid:valueIsValid,
        hasError,
        valueChangeHandler,
    }

}

export default useInput