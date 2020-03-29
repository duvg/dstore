import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Message from '../common/Message';


// Interfaces
import { IAuthFormProps } from '../../Interfaces/UserInterfaces';

const RegisterForm = (props: IAuthFormProps) => {
     const { register, errors, watch, handleSubmit, formState } = useForm();
     const { customHandleSubmit, userId } = props;
     const {isSubmitting} = formState;
     console.log(props);

     
     
     return(
          
          <form onSubmit={handleSubmit(customHandleSubmit)} noValidate>
               {userId && <Message color="success" message="" />}
               <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input 
                         name="nombre"
                         type="text"
                         placeholder="duvi"
                         className="form-control"
                         ref={register({ required: true})}
                    />
                    { errors.nombre && <Message color="danger" message="Nombre es requerido" />}
               </div>
               <div className="form-group">
                    <label htmlFor="Email">Email</label>
                    <input 
                         name="correo"
                         type="email"
                         placeholder="duvi@mail.com"
                         className="form-control"
                         ref={register({ 
                              required: true,
                              pattern: {
                                   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                   message: "El email ingresado no es valido"
                              }
                         })}
                    />
                    { errors.correo && <Message color="danger" message="Email es requerido" />}
                    { errors.correo && 
                      errors.correo.type === 'pattern' && 
                      <Message color="danger" message={errors.correo.message} />
                    }
               </div>
               <div className="form-group">
                    <label htmlFor="password">Contraseña</label>
                    <input 
                         name="clave"
                         type="password"
                         className="form-control"
                         ref={register({ required: true, minLength: 6})}
                    />
                    { errors.clave && <Message color="danger" message="Clave es requerida" />}
                    { errors.clave 
                      && errors.clave.type === "minLength" 
                      && <Message color="danger" message="Clave es muy corta" />
                    }
               </div>
               <div className="form-group">
                    <label htmlFor="nombre">Confirmar contraseña</label>
                    <input 
                         name="confirmacion_clave"
                         type="password"
                         placeholder="repite la contraseña anterior"
                         className="form-control"
                         ref={register({
                              required: true,
                              validate: {
                                   similar: value => value === watch('clave')
                              }
                         })}
                    />
                    { errors.confirmacion_clave && <Message color="danger" message="Confirmación de Clave es requerida" />}
                    { errors.confirmacion_clave 
                      && errors.confirmacion_clave.type === "similar" 
                      && <Message color="danger" message="Las claves no coinciden" />
                    }
               </div>
               <button type="submit" className="btn btn-primary btn-block"  disabled={isSubmitting} >Registratme</button>
          </form>
     );
}
export default RegisterForm;