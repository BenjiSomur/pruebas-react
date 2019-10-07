import React from 'react';
import ReactDOM from 'react-dom';

function MyApp(){
	return(
		<div>
			<ul>
				<li>Elemento 1</li>
				<li>Elemento 2</li>
				<li>Elemento 3</li>
			</ul>
		</div>
	);
}

ReactDOM.render(
	<MyApp />
	, document.getElementById('root')
);
