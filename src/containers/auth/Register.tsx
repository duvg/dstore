import React from 'react';

import { connect } from 'react-redux';
import { IState } from '../../redux/ducks/index';
import Container from '../../components/common/Container';
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