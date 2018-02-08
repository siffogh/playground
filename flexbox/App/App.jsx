import React from 'react';


class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="container-top">
                    <div className="container-top-top">Top > Top</div>
                    <div className="container-top-bottom">Top > Bottom</div>
                </div>
                <div className="container-bottom">
                    <div className="container-bottom-top">Bottom > Top</div>
                    <div className="container-bottom-bottom">
                        <div className="container-bottom-bottom-top">Bottom > Bottom > Top</div>
                        <div className="container-bottom-bottom-bottom">Bottom > Bottom > Bottom</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;