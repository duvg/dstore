import React from 'react';
import * as Yup from 'yup';

import { withFormik,FormikProps, Form, Field } from 'formik';
import Error from '../common/Error';

interface IFormValues {
    email: string
}
interface IOtherProps {
    recovery?: string
}

const InnrForm = (props: IOtherProps & FormikProps<IFormValues>) => {
    const { touched, errors, isSubmitting, recovery} = props;

    return(
        <Form>
            {recovery && 
                <Error color="success" message={recovery} />
            }
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <Field
                    name="email"
                    type="email"
                    className="form-control"
                />
                { touched.email && errors.email &&
                    <Error color="danger" message={errors.email} />
                }
            </div>
            <button 
                className="btn btn-primary btn-block" 
                disabled={isSubmitting}
            >
                Recuperar Password
            </button>
        </Form>
    );
}

interface IMyFormProps {
    initialEmail?: string,
    handleRecovery: (values: {}) => void,
    recovery?: string
}

// Reglas de validacion
const RecoverySchema = Yup.object().shape({
    email: Yup.string()
        .email('Email invalido')
        .required('Email es requerido')
});

const RecoveryPassForm = withFormik<IOtherProps & IMyFormProps, IFormValues>({
    mapPropsToValues: props =>{
        return {
            email: props.initialEmail || '',
            recovery: props.recovery || ''
        }
    },
    validationSchema: RecoverySchema,
    handleSubmit: (values, formikBag) => {
        const { handleRecovery } = formikBag.props;
        handleRecovery(values);
        formikBag.setSubmitting(false);
    }

})(InnrForm);

export default RecoveryPassForm;