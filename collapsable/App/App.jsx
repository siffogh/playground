import React from 'react';

import Collapsable from '../Collapsable';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <h1>Application</h1>
                <Collapsable>
                    <Collapsable.Header>
                        Header
                    </Collapsable.Header>
                    <Collapsable.Body>
                        <div className="left">
                            <p>This</p>
                            <p>is</p>
                            <p>a</p>
                        </div>
                        <div className="right">
                            <p>collapsable</p>
                            <p>body</p>
                        </div>
                    </Collapsable.Body>
                </Collapsable>
            </div>
        );
    }
}

export default App;