import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Animated } from 'react-animated-css';

// Componentes a utilizar
import Card from '../../components/common/Card';
import Title from '../../components/common/Title';
import LoginForm from '../../components/auth/LoginForm';
import RecoveryPassForm from '../../components/auth/RecoveryPassForm';

import { RouteComponentProps } from 'react-router-dom';

// swal
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

// Interfaces
import { IState } from '../../redux/ducks/index';
import { ILoginProps } from '../../Interfaces/UserInterfaces';   

// Thunks
import { login as loginThunk, recoveryPassword as recoveryPasswordThunk} from '../../redux/ducks/UsersDucks';


function Login(props: ReduxType & RouteComponentProps) {
    console.log(props);
    const { history, login } = props;
    const { authenticated, authError, recoveryPassword} = props;
    const [recovery, setRecovery] = useState(false);
    
    const MySwal = withReactContent(Swal);
    
    useEffect(
        () => {
            if(authenticated !== false)
            {
                history.push('/');
            }
            if(authError !== null)
            {
                MySwal.fire({
                    title: 'Acceso denegado',
                    text: 'Las credenciasles ingresadas son incorrectas, intente nuevamente',
                    icon: 'error',
                  });
            }
            console.log('abe95@example.com');
        }, [authenticated, authError]
    );

    
    return(
        <div className="container-fluid h-100 ">
            <div className="row  justify-content-center h-100 rojo">
                <div className="col-md-4 col-xs-4 col-lg-4 col-sm-6 text-left my-auto">
                <Animated 
                    animationIn="fadeIn" 
                    animationOut="fadeOut" 
                    isVisible={!recovery} 
                    className={(recovery ? 'hidden' : '')}
                >
                    <Card>
                        <Title text="Iniciar Sesion"/>
                        <LoginForm  customHandleSubmit={login} />
                        <div className="button-group mt-1">
                            <button 
                                className="btn btn-link btn-sm float-left" 
                                onClick={() => setRecovery(true)}
                            >
                                Olvide la contraseña?</button>
                            <button 
                                className="btn btn-link btn-sm float-right" 
                                onClick={() => history.push('/register')}
                            >
                                registrate</button>
                        </div>
                        
                    </Card>
                </Animated>
                <Animated 
                     animationIn="fadeIn" 
                     animationOut="fadeOut"   
                    animateOnMount={false} 
                    isVisible={recovery}
                    className={(!recovery ? 'hidden' : '')}
                >
                    <Card>
                        <Title text="Recuperar Contraseña"/>
                        <RecoveryPassForm  customHandleSubmit={recoveryPassword} message={recoveryPassword && ''} />
                        <button 
                            className="btn btn-link btn-block btn-sm" 
                            onClick={() => setRecovery(false)}
                        >
                            Ya tienes cuenta?, Iniciar Sesion
                        </button>   
                        
                    </Card>
                </Animated>
                </div>
            </div>
            
        </div>
    );
}

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
const mapStateToProps = (state: IState) => {
    const  {users : { authenticated, authError, recoveryPassword }} = state;
    return {
        authenticated,
        authError,
        recoveryPassword
    }
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => ({
    login: (payload: any) => dispatch(loginThunk(payload)),
    recoveryPassword: (payload: any) => dispatch(recoveryPasswordThunk(payload))
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);