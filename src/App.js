import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Páginas
import { Inicio } from './pages/Inicio';
import { NoPage } from './pages/NoPage';

export const App = () => {
    return (
        <Router>
            <Switch>
                {/* Cuando accedamos a /, mostrará el componente Inicio */}
                <Route exact path="/" component={ Inicio } />

                {/* Cuando se acceda a una ruta que no existe, mostrará el componente NoPage */}
                <Route component={ NoPage } />
            </Switch>
        </Router>
    )
}
