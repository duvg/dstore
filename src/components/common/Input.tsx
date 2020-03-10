import React from 'react';

import { WrappedFieldProps } from 'redux-form';

interface IInputProps {
    label: string,
    name: string,
    placeholder: string,
}

const Input = (props: WrappedFieldProps & IInputProps) => {
    const { label, name } = props;
    return(
        <div className="form-group ">
            <label htmlFor={name}>{label}</label>
            <input {...props} {...props.input} className="form-control"/>
        </div>
    ); 
}
export default Input;