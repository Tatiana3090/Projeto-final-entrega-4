import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/index';
import Locais from './Pages/Locais/index';
import SobreNos from './Pages/SobreNos/index';
import Esportes from './Pages/Esportes/index';
import NavBar from './Components/NavBar/NavBar';

export default function Routes() {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/sobrenos' component={SobreNos} />
                    <Route path='/locais' component={Locais} />
                    <Route path='/esportes' component={Esportes} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}