import React from 'react';

const Heading = ({bgText, mainText}) => {
    return (
        <div className='Component-heading'>
            <h2 className='fade-title'>{bgText}</h2>
            <h3 className='pt-4 fw-bold'>{mainText}</h3>
        </div>
    );
};

export default Heading;