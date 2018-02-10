import React from 'react';


class Collapsable extends React.Component {
    state = {
        collapsed: false
    };

    toggle = () => {
        const { collapsed } = this.state;
        this.setState({ collapsed: !collapsed });
    };

    render() {
        const { collapsed } = this.state;
        const className = `collapsable ${this.props.className || ''}`;
        const children = React.Children.map(this.props.children, child => (
            React.cloneElement(child, { collapsed })
        ));
        const btnValue = collapsed ? 'expand' : 'collapse';
        return (
            <div className={className}>
                {children}
                <button className='toggle' onClick={this.toggle}>{btnValue}</button>
            </div>
        );
    }
};

Collapsable.Header = ({ children, className = '' }) => (
    <div className={`collapsable-header ${className}`}>
        { children }
    </div>
);

Collapsable.Body = ({ children, className = '', collapsed }) => {
    const height = collapsed ?
        0:
        'auto';
    const style = { height: height };
    return (
        <div className={`collapsable-body ${className}`} style={style}>
            { children }
        </div>
    )
};

export default Collapsable;