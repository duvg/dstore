import React from 'react';

interface IErrorProps {
    color: string,
    message: string
}
const Error = ({color, message}: IErrorProps) => {  
    return (
        <div className={`alert alert-${color} mt-1`} role="alert">
            {message}
        </div>
    );
}

export default Error;