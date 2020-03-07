import React from 'react';
import { ITitle } from '../../Interfaces/ComponentInterfaces';

const styles = {
    color: '#555',
    textAlign: 'center'
} as React.CSSProperties;

const Title = ({text}: ITitle) => {
    return(
        <h2 style={styles}>
            {text}
        </h2>
    );
}

export default Title;