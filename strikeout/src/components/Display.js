import React from 'react';
import "../App.css";

function Display(props) {
    return (
        <div>
            <h1>Ball Count</h1>
            <div className="display-stats">
            	<h3 className="count">strikes: <span className="stat" data-testid="strike-count">{props.strikes}</span></h3>
            	<h3 className="count">balls: <span className="stat" data-testid="ball-count">{props.balls}</span></h3>
            </div>
        </div>
    )
}

export default Display;