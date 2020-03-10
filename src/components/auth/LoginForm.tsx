import React from 'react';
import { Field, reduxForm, InjectedFormProps} from 'redux-form';

// Componentes
import Button from '../common/Button';
import Input from '../common/Input';

const LoginForm = (props: InjectedFormProps) => {
    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit}>
            <Field 
                label="Correo" 
                placeholder="Correo Electronico" 
                name="email" 
                type="email" 
                component={Input}
            />
            <Field
                label="Contraseña"
                placeholder="Ingresa tu contraseña"
                name="password"
                type="password"
                component={Input}
            />
            <Button tipo="primary" size="block">Iniciar Sesion</Button>

        </form> 
    )
}

export default reduxForm({
    form: 'login'
})(LoginForm);