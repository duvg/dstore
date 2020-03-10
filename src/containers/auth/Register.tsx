import React from 'react';

import RegisterForm from '../../components/auth/RegisterForm';

// Components
const Register = () => {
    return(
        <div id="login">
            <h3>Registrate</h3>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <RegisterForm />
                </div>
            </div>
        </div>
    );
}

export default Register;