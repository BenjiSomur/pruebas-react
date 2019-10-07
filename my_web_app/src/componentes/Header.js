import React from 'react';

function Header(){
	const nombre = "Juan Carlos Benjamín";
	const apellido = "Somohano Murrieta";

	return (
		<nav className="navbar">
	        <h1>Hello {`${nombre} ${apellido}`}!</h1>
		</nav>
	);
}

export default Header;