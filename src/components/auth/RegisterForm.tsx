import React from 'react';
import { Field, reduxForm, InjectedFormProps} from 'redux-form';

// Componentes
import Button from '../common/Button';
import Input from '../common/Input';

const RegisterForm = (props: InjectedFormProps) => {
    const { handleSubmit } = props;
    return(
        <form className="form" onSubmit={handleSubmit}>
           <Field
                label="Nombre"
                placeholder="Nombre Completo"
                name="nombre"
                type="text"
                component={Input}
           />
           <Field
                label="email"
                placeholder="micorreo@correo.com"
                name="correo"
                type="email"
                component={Input}
           />
           <Field
                label="Contraseña"
                placeholder="1234 Asdf"
                name="clave"
                type="password"
                component={Input}
           />
           <Field
                label="Confirmar Contraseña"
                placeholder="Repite la contrasela ingresada"
                name="confirmacion_clave"
                type="password"
                component={Input}
           />
           <Button tipo="primary" size="block">Registrame</Button>
        </form>
    );
}

export default reduxForm({
    form: 'register'
})(RegisterForm);