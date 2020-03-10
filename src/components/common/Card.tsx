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
        <div className="card bg-light my-auto">
            
            <article className="card-body" style={styles}>
                {children}
            </article>
        </div>
        
    
    );
}

export default Card;