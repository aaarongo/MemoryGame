import React, { PureComponent } from 'react';

class Menu extends PureComponent {
    state = {}
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-4">
                    </div>
                    <div className="col-md-4" style={{ paddingTop: "30%" }}>
                        <button className="btn btn-primary" style={{ width: "100%" }}>Play Game</button>
                        <div style={{ paddingTop: "5%" }}>
                            <button className="btn btn-danger" style={{ width: "100%" }}>Exit</button>
                        </div>

                    </div>
                    <div className="col-md-4">
                    </div>

                </div>

            </div>
        );
    }
}

export default Menu;