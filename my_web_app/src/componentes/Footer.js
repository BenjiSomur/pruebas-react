import React from 'react';

function Footer(){

	const fecha = new Date();
	const horas = fecha.getHours();
	let tiempoDelDia;

	const estilos = {
		fontSize: '20',
	};

	if(horas < 12) {
		tiempoDelDia = "de la mañana";
		estilos.color="#04756F";
	}else if(horas >=12 && horas < 19){
		tiempoDelDia = "de la tarde";
		estilos.color="#2E0927";
	}else{
		tiempoDelDia = "de la noche";
		estilos.color="#D90000";
	}
	return(
		<footer>
			<h3 style={estilos}>Son las {`${fecha.getHours() % 12}:${fecha.getMinutes()}
				${tiempoDelDia}`}</h3>
		</footer>
	);
}

export default Footer;