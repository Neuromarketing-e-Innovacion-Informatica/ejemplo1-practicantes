import React from 'react';
import ReactDOM from 'react-dom';

// Componente App, el cual abarca el Router y todas las páginas
import { App } from './App';

// Estilos globales
import './css/styles.css';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
