import React, { useEffect } from 'react';

import RegisterForm from '../../components/auth/RegisterForm';
import Container from '../../components/common/Container';
import Title from '../../components/common/Title';
import Card from '../../components/common/Card';

// redux
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

// Interfaces
import { IState } from '../../redux/ducks/index';
import { IUserData, IRegisterProps, IAuthUser } from '../../Interfaces/UserInterfaces';

// Thunks
import { register as registerThunk } from '../../redux/ducks/UsersDucks';

// swal
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


const Register = (props: IState) => {
    const { register, history }: any  = props;
    const { identificador } = props.users.data;

    const MySwal = withReactContent(Swal);

     useEffect(
          () => {
               if(identificador != "") {
                    MySwal.fire({
                         title: 'Registrado',
                         text: 'Te has registrado satisfactoriamente, se ha enviado un correo de verificación, revisa tu bandeja de entrada',
                         icon: 'success',
                         confirmButtonText: 'Iniciar Sesion'
                       }).then(() => {
                         history.push('/login');
                       });
               }              
          }, [identificador]
     );
    
    return(
        <Container>
            
            <div className="row justify-content-center h-100">
                <div className="col-xs-8 col-md-6 col-sm-8 col-lg-4 text-left my-auto">
                    <Card>
                        <Title text="Registrate" />
                        <RegisterForm customHandleSubmit={register} userId={identificador}/>
                        <button 
                            className="btn btn-link btn-block btn-sm" 
                            onClick={() => history.push('/login')}
                        >
                            Ya tienes cuenta?, Iniciar Sesion
                        </button>  
                    </Card>
                </div>
            
            </div>
        </Container>

    );
}
const mapStateToProps = (state: IState) => state;
const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => ({
    register: (payload: IUserData) => dispatch(registerThunk(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register);