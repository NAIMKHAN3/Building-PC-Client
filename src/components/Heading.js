import React from 'react';

const Heading = ({children, className, value}) => {
    return (
        <h1 className={className}>
            {children}{value}
        </h1>
    );
};

export default Heading;