import React from 'react';

import './style.scss';

class VerticalPane extends React.Component {

    state = {
        isResizeInitiated: false,
        initialTop: null,
        initialHeight: null,
        height: this.props.height,
        minHeight: this.props.minHeight || 0
    };

    resizableRef = (element) => {
        this.resizableNode = element;
    };

    componentWillReceiveProps(props) {
        const { height } = this.props.height;
        this.setState({ height });
    }

    componentDidMount(){
        document.onmousemove = this.onMouseMove;
        document.onmouseup = this.onMouseUp;
    }

    onMouseDown = (e) => {
        e.preventDefault();
        const { resizableNode } = this;
        if(resizableNode) {
            document.body.style.cursor = 'row-resize';
            this.setState({
                isResizeInitiated: true,
                initialTop: resizableNode.offsetTop,
                initialHeight: resizableNode.offsetHeight
            });
        }
    }

    onMouseMove = (e) => {
        e.preventDefault();
        const {
            isResizeInitiated,
            initialHeight,
            initialTop,
            minHeight } = this.state;

        if(isResizeInitiated) {
            const dHeight = e.clientY - initialTop;
            const height = (dHeight + minHeight) < initialHeight ?
                initialHeight - dHeight :
                minHeight;
            this.setState({ height });
        }
    }

    onMouseUp = (e) => {
        e.preventDefault();
        document.body.style.cursor = 'auto';
        const { isResizeInitiated } = this.state;
        isResizeInitiated && this.setState({
            isResizeInitiated: false,
            initialTop: e.clientTop,
            initialHeight: this.resizableNode.offsetHeight
        });
    }

    onCollapsedChild = ( ) => {
        this.setState({ height: null });
    }

    componentWillUnmount(){
        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('mouseup', this.onMouseUp);
    }

    render() {
        const { height, isResizeInitiated } = this.state;
        return (
            <div className='horizontal-pane'>
                {this.props.children[0]}
                <span
                    className="resizer"
                    onMouseDown={this.onMouseDown}/>
                {
                    React.cloneElement(this.props.children[1], {
                        height: height,
                        isResizeInitiated: isResizeInitiated,
                        resizableRef: this.resizableRef,
                        onCollapsedChild: this.onCollapsedChild
                    })
                }
            </div>
        );
    }
};

export default VerticalPane;