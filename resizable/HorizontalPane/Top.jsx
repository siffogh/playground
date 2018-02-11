import React from 'react';

const Top = ({ className, children }) => (
    <div className={`top ${className}`}>
        { children }
    </div>
);

export default Top;