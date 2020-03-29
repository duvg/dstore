import React from 'react';

interface IMessageProps {
    color: string,
    message: string
}
const Message = ({color, message}: IMessageProps) => {  
    return (
        <div className={`alert alert-${color} mt-1 text-center`} role="alert">
            {message}
        </div>
    );
}

export default Message;