import React from 'react';

interface ICardProps {
    children?: object 
}

const styles = {
    maxWidth: '400px'
}

const Card = (props: ICardProps) => {
    let { children } = props;
    return(
        <div className="card bg-light">
            <article className="card-body mx-auto" style={styles}>
                {children}
            </article>
        </div>
        
    
    );
}

export default Card;