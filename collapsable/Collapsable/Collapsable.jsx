import React from 'react';

import './Collapsable.scss';

class Collapsable extends React.Component {
    state = {
        collapsed: false
    };

    componentWillReceiveProps(props) {
        const { collapsed } = this.props;
        if(collapsed != null && typeof collapsed !== 'undefined') {
            this.setState({ collapsed });
        }
    }

    toggle = () => {
        const { collapsed } = this.state;
        if(!collapsed) {
            this.props.onCollapsed();
        }
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
                <button className='collapse' onClick={this.toggle}>{btnValue}</button>
            </div>
        );
    }
};

export default Collapsable;