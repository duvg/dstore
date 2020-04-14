import React from 'react';
import { ISellers } from '../../Interfaces/SellerInterfaces';

const styles = {
    avatar: {
        width: '250px'
    }
}

const SellerDetails = (props: ISellers) => {
    const {seller} = props;
    console.log(process.env.PUBLIC_URL + '/avatar.png');
    return(
        <div className="row pt-3">
            <div className="col-md-12">
                <h3>Información del vendedor</h3>
                <div >
                <img style={styles.avatar} src={process.env.PUBLIC_URL + '/images/avatar.png'} alt=""/>
                </div>
                <br/>
                <strong>Nombre</strong>: {seller.nombre} <br/>
                <strong>Correo</strong>: {seller.correo} <br/>
                <strong>Registrado desde</strong>: { seller.fechaCreacion}
            </div>
        </div>
    )
}

export default SellerDetails;
