import React from 'react';

interface IAlertProps {
    text: string,
    type: string,
}
/**
 * 
 * @param props.text  contiene el texto a mostrar en la alerta
 * @param props.type  contiene tipo de alerta a mostrar ej: alert, success danger 
 */
const Alert = (props: IAlertProps) => {

    let {text, type} = props;
    
    return(
        <div className={`alert alert-${type}`} role='alert'>
            { text }
        </div>
    );
}


export default Alert;