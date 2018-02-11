import React from 'react';


const Body = ({ children, className = '', collapsed }) => {
    const style = collapsed ? { display: 'none' } : {};
    return (
        <div className={`collapsable-body ${className}`} style={style}>
            { children }
        </div>
    )
};

export default Body;