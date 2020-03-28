import React from 'react';
import { useForm } from 'react-hook-form';
import Message from '../common/Message';

// Componentes
import Button from '../common/Button';
import Input from '../common/Input';


const RegisterForm = (props: any) => {
     const { register, errors, watch, handleSubmit } = useForm();
     const { customHandleSubmit } = props;
     console.log(errors);
     return(
          <form onSubmit={handleSubmit(customHandleSubmit)}>
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
                         name="email"
                         type="email"
                         placeholder="duvi@mail.com"
                         className="form-control"
                         ref={register({ required: true})}
                    />
                    { errors.email && <Message color="danger" message="Email es requerido" />}
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
               <button type="submit" className="btn btn-primary btn-block">Registratme</button>
          </form>
     );
}
export default RegisterForm;