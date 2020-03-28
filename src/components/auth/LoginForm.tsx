import React from 'react';
import * as Yup from 'yup';

import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';
import Error from '../common/Error';

interface FormValues {
    email: string,
    password: string
}


const InnerForm = (props: FormikProps<FormValues>) => {
    const { touched, errors, isSubmitting} = props;
    return (
        <Form>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field
                    type="email"
                    name="email"
                    className="form-control"
                />
                {touched.email && errors.email && 
                    <Error color="danger" message={errors.email}  />
                }
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field
                    type="password"
                    name="password"
                    className="form-control"
                />
                {touched.password && errors.password && 
                    <Error color="danger" message={errors.password}  />
                }
            </div>
            <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting}>Iniciar Sesion</button>
        </Form>
    )
}

interface MyFormProps {
    initialEmail?: string,
    handleLogin: any
}


// Valdiate form
const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Email invalido")
        .required('Email es requerido'),
    password: Yup.string()
        .min(6, 'El password debe contener almenos 6 caracteres')
        .required('Password es requerido')
});
const LoginForm = withFormik<MyFormProps, FormValues>({
    
    mapPropsToValues: props => {
        return {
            email: props.initialEmail || '',
            password: ''
        };
    },
    validationSchema: LoginSchema,
    handleSubmit: (values, formikBag) => {

        const { handleLogin } = formikBag.props;
        handleLogin(values);
        formikBag.setSubmitting(false);
    }
})(InnerForm);

export default LoginForm;