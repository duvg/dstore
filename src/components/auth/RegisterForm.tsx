import React from 'react';

const RegisterForm = () => {
    return(
        <form className="form">
            <h3>Inicio de sesion</h3>
            <div className="form-group">
                <label htmlFor="">E-Mail</label>
                <input type="email" className="form-control"/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input type="password" className="form-control"/>
            </div>
        </form>
    );
}

export default RegisterForm;