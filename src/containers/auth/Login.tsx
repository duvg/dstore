import React from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

// Componentes a utilizar
import Card from '../../components/common/Card';
import Container from '../../components/common/Container';
import LoginForm from '../../components/auth/LoginForm';

// Interfaces
import { IState } from '../../redux/ducks/index';
import { ILogin, ILoginProps } from '../../Interfaces/UserInterfaces';   
import Title from '../../components/common/Title';

const Login = ({login}:ILoginProps) => {
    return(
        <Container>
            <Card>
                <Title text="Iniciar Sesion"/>
                <LoginForm />
            </Card>
        </Container>
    );
}


export default Login;