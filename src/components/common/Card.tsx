import React from 'react';

interface ICardProps {
    children?: object 
}
const styles = {
    cardContainer: {
        border: 'thin solid #bdbbbb'
    } as React.CSSProperties,
    cardBody: {
        maxWidth: '400px' 
    }
}

const Card = (props: ICardProps) => {
    let { children } = props;
    return(
        <div className="card bg-light my-auto customCard" style={styles.cardContainer}>
            
            <article className="card-body" >
                {children}
            </article>
        </div>
        
    
    );
}

export default Card;