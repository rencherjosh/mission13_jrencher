import React from "react";

function TopBanner () {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-3">
                    <img src="./logo192.png" alt="logo"></img>
                </div>
                <div className="col">
                    <h1>Josh's React Site</h1>
                </div>
            </div>
        </React.Fragment>
    );
}

export default TopBanner;