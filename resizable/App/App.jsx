import React from 'react';

import HorizontalPane, { Top, Bottom } from '../HorizontalPane';

import Collapsable, { Header, Body } from '../../collapsable/Collapsable';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <div className="app-top">
                    <p>Some</p>
                    <p>content</p>
                    <p>above</p>
                </div>
                <HorizontalPane minHeight={18}>
                    <Top className="top">Top</Top>
                    <Bottom className="bottom">
                        <Collapsable onCollapsed={this.onCollapsed}>
                            <Header>Header</Header>
                            <Body>
                                <p>This</p>
                                <p>is</p>
                                <p>a</p>
                                <p>collapsable</p>
                                <p>div</p>
                            </Body>
                        </Collapsable>
                    </Bottom>
                </HorizontalPane>
            </div>
        );
    }
}

export default App;