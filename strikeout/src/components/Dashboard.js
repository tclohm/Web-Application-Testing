import React from "react";
import "../App.css"

function Dashboard(props) {

	const { strikes, setStrikes, balls, setBalls, fouls, setFouls } = props;

	function didStrike() {
		if(strikes >= 2) {
			setStrikes(0);
			setBalls(0);
		} else {
			setStrikes(strikes + 1);
		}
	}

	function didBall() {
		if(balls >= 3) {
			setBalls(0);
			setStrikes(0);
			setFouls(0)
		} else {
			setBalls(balls + 1);
		}
	}

	function didFoul() {
		if(strikes >= 2) {
			setFouls(0);
		}
		else if(fouls >= 1) {
			setStrikes(strikes + 1)
			setFouls(0);
		}
		else if(fouls < 1) {
			setFouls(fouls + 1)
		}
	}

	function didHit() {
		setStrikes(0);
		setBalls(0);
		setFouls(0);
	}

  return (
  	<div className="btn-group">
  		<button className="btn" onClick={didStrike}>STRIKE</button>
  		<button className="btn" onClick={didBall}>BALL</button>
  		<button className="btn" onClick={didFoul}>FOUL</button>
  		<button className="btn" onClick={didHit}>HIT</button>
  	</div>
  );
}

export default Dashboard;