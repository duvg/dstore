import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Animated } from 'react-animated-css';

// Componentes a utilizar
import Card from '../../components/common/Card';
import Title from '../../components/common/Title';
import LoginForm from '../../components/auth/LoginForm';
import RecoveryPassForm from '../../components/auth/RecoveryPassForm';

// Interfaces
import { IState } from '../../redux/ducks/index';
import { ILoginProps } from '../../Interfaces/UserInterfaces';   

// Thunks
import { login as loginThunk, recoveryPassword as recoveryPasswordThunk} from '../../redux/ducks/UsersDucks';

function Login(props: ILoginProps) {
    
    const { history, login, recoveryPassword, users }: any = props;
    const [recovery, setRecovery] = useState(false);
    useEffect(
        () => {
            if(users.authenticated)
            {
                history.push('/');
            }
        }, [users.authenticated]
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
                        <RecoveryPassForm  customHandleSubmit={recoveryPassword} message={users.recoveryPassword} />
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


const mapStateToProps = (state: IState) => state;

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => ({
    login: (payload: any) => dispatch(loginThunk(payload)),
    recoveryPassword: (payload: any) => dispatch(recoveryPasswordThunk(payload))
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);