import React from 'react';

const Header = ({ children, className = '' }) => (
    <div className={`collapsable-header ${className}`}>
        { children }
    </div>
);

export default Header;