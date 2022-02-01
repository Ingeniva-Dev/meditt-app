import React from "react";

const regTime = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/

const isTime = value => regTime.test(value);
const isEmpty = value => {
    if (value === undefined) {
        return false
    }
    return value.toString().trim() !== '';
};


const useValidation = () => {

    return {isTime, isEmpty}

}
export default useValidation