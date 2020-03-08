import React from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

// Componentes a utilizar
import Card from '../../components/common/Card';
import Container from '../../components/common/Container';
import LoginForm from '../../components/auth/LoginForm';
import Title from '../../components/common/Title';

// Interfaces
import { IState } from '../../redux/ducks/index';
import { ILoginProps } from '../../Interfaces/UserInterfaces';   

// Thunks
import { login as loginThunk} from '../../redux/ducks/UsersDucks';


const Login = (props: ILoginProps) => {
    const { login }: any = props;
    return(
        <Container>
            <Card>
                <Title text="Iniciar Sesion"/>
                <LoginForm onSubmit={login}/>
            </Card>
        </Container>
    );
}
const mapStateToProps = (state: IState) => state;
const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => ({
    login: (payload: any) => dispatch(loginThunk(payload)) 
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);