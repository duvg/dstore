import React from 'react';

import RegisterForm from '../../components/auth/RegisterForm';
import Container from '../../components/common/Container';
import Title from '../../components/common/Title';
import Card from '../../components/common/Card';

// redux
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

// Interfaces
import { IState } from '../../redux/ducks/index';
import { IUserData, IRegisterProps } from '../../Interfaces/UserInterfaces';

// Thunks
import { register as registerThunk } from '../../redux/ducks/UsersDucks';

// Components
const Register = (props: IRegisterProps) => {
    const { register }: any = props;
    console.log(props);
    return(
        <Container>
            
            <div className="row justify-content-center h-100">
                <div className="col-xs-8 col-md-6 col-sm-8 col-lg-4 text-left my-auto">
                    <Card>
                        <Title text="Registrate" />
                        <RegisterForm onSubmit={register}/>
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