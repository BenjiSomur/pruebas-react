import React from 'react';

function MainContent () {
	return (
		<main>
			<div className="row">
				<input type="checkbox" name="vehiculo1" value="Camioneta" />
				<span>Camioneta</span>
			</div>
			<div className="row">
				<input type="checkbox" name="vehiculo2" value="Sedan" />
				<span>Sedan</span>
			</div>
			<div className="row">
				<input type="checkbox" name="vehiculo3" value="Wagon" />
				<span>Wagon</span>
			</div>
		</main>
	);
}

export default MainContent;