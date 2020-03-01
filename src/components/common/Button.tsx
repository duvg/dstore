import React from 'react';
import PropTypes from 'prop-types';
/**
 * @prop {string} text Texto que mostrara el boton
 * @prop {string} type Define el tipo de boton default: success ej: primary, secondary, success, danger
 * @prop {string} size Define el tamaño del boton ej: ls sm xs large
 */
interface IButtonProps {
    text: string,
    type?: string,
    size?: string,
    handleClick: () => void
}
const Button = (props:IButtonProps) => {

    let {text, type, size, handleClick} = props;

    let typeButton = type ? type : 'success';
    let customSize = size ? `btn-${size}` : '';
    return(
        <button
            className={`btn btn-${typeButton} ${customSize}`}
            onClick={handleClick}
        >
            { text }
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
    size: PropTypes.string,
    handleClick: PropTypes.func.isRequired
}

export default Button;