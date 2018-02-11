import React from 'react';

const Bottom = ({ className, resizableRef, onCollapsedChild, isResizeInitiated, height, children }) => {
    const style = height || height === 0 ? { height : height } : {};
    const collapsed = !isResizeInitiated ? null : false;
    return (
        <div
            className={`bottom ${className}`}
            style={style}
            ref={resizableRef}>
            {
                React.cloneElement(children, { collapsed, onCollapsed: onCollapsedChild })
            }
        </div>
    );
}

export default Bottom;