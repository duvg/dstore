import React from 'react';
import PropTypes from 'prop-types';
/**
 * @prop {string} text Texto que mostrara el boton
 * @prop {string} type Define el tipo de boton default: success ej: primary, secondary, success, danger
 * @prop {string} size Define el tamaño del boton ej: ls sm xs large
 */
interface IButtonProps {
    tipo?: string,
    size?: string,
    children: string,
}

const Button = (props:IButtonProps) => {

    let { children, tipo, size} = props;

    let typeButton = tipo ? tipo : 'success';
    let customSize = size ? `btn-${size}` : '';
    return(
        <button
            className={`btn btn-${typeButton} ${customSize}`}
            {...props}
        >{children}</button>
    );
}

Button.propTypes = {
    tipo: PropTypes.string,
    size: PropTypes.string,
}

export default Button;