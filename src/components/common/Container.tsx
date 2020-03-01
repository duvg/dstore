import React from 'react';

interface IContainerProps {
    title?: string,
    children?: object
}

const Container = (props: IContainerProps) => {
    let { title, children } = props;
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                { title && <div className="title"><h2>{title}</h2><hr/></div> }
                </div>                
            </div>
            {children}
        </div>
    );
}


export default Container;