import React from 'react';
import { useForm } from 'react-hook-form';
import Message from '../common/Message';

// import interfaces 
import { IAuthFormProps } from '../../Interfaces/UserInterfaces';

const RecoveryPassForm = (props: IAuthFormProps) => {
    const { register, errors, handleSubmit } = useForm();
    const { message, customHandleSubmit } = props;
    return (
        <form onSubmit={handleSubmit(customHandleSubmit)}>
            {message && <Message color="success" message={message} />}
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    name="email"
                    type="email"
                    className="form-control"
                    ref={register({ required: true })}
                />
                { errors.email && <Message color="danger" message="Email es requerido" />}
            </div>
            <button className="btn btn-primary btn-block">Enviar link de recuperación</button>
        </form>
    )
}
export default RecoveryPassForm;