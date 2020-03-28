import React from 'react';

import { useForm } from 'react-hook-form';
import Message from '../common/Message';

const LoginForm = (props: any) => {
    const { register, handleSubmit, errors } = useForm();
    const { handleLogin } = props;

    return (
        <form onSubmit={handleSubmit(handleLogin)}>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="example@mail.com"
                    ref={register({ required: true })}
                />
                {errors.email && <Message color="danger" message='Email es requerido' />}
                
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input 
                    type="password"
                    name="password"
                    className="form-control"
                    ref={register({ required: true, minLength: 6})}
                />
                {errors.password && <Message color="danger" message="Password es requerido" />}
                {errors.password && 
                 errors.password.type === "minLength" 
                 && <Message color="danger" message='Password demasiado corto'  />}
            </div>
            <button type="submit" className="btn btn-primary">Iniciar Sesion</button>
        </form>
    ); 
}

export default LoginForm;
