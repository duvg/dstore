import React from  'react';
import Icon from './common/Icon';

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const styles = {
    shopping: {
        display:'block',
        width: '35px',
        height: '35px',
        textAlign: 'center',
        backgroundColor: 'rgb(8, 114, 147)',
        borderRadius: '5px'
    } as React.CSSProperties
}

const Navbar = () => {

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <a href="/" className="navbar-brand" >Duvg</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a href="/" className="nav-link">Inicio <span className="sr-only">(current)</span></a>
                    </li>
                    {/* TODO: dinamic items for cateogories */}
                    <li className="nav-item dropdown">
                        <a href="/" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Categorias
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a href="/" className="dropdown-item">Action</a>
                        <a href="/" className="dropdown-item">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a href="/" className="dropdown-item">Something else here</a>
                        </div>
                    </li>
                    
                    </ul>

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a href="/" className="nav-link" style={styles.shopping}> <Icon icon={faShoppingCart} />   </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="/" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Admin user
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a href="/" className="dropdown-item">Mis compras</a>
                            <a href="/" className="dropdown-item">Perfil</a>
                            <a href="/" className="dropdown-item">Vender</a>
                            <div className="dropdown-divider"></div>
                            <a href="/" className="dropdown-item">Salir</a>
                            </div>
                        </li>
                    </ul>
                    
                </div>
            </div>
            
        </nav>
    );
}
export default Navbar;