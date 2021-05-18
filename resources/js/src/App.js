import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import ReactDOM from 'react-dom';

import Home from '../src/LayoutComponents/Home';

import ConsultarExpediente from './ExpedientesComponents/ConsultarExpediente';
import AgregarExpediente from './ExpedientesComponents/AgregarExpediente';
import EditarExpediente from './ExpedientesComponents/EditarExpediente';
import BuscarExpediente from './ExpedientesComponents/BuscarExpediente';
import VerExpediente from './ExpedientesComponents/VerExpediente';

import AgregarAntecedente from './AntecedentesComponents/AgregarAntecedente';
import EditarAntecedente from './AntecedentesComponents/EditarAntecedente';

import AgregarHospitalizacion from './HospitalizacionesComponents/AgregarHospitalizacion';
import EditarHospitalizacion from './HospitalizacionesComponents/EditarHospitalizacion';
import VerHospitalizacion from './/HospitalizacionesComponents/VerHospitalizacion';

import ConsultarDiagnostico from './DiagnosticosComponents/ConsultarDiagnostico';
import AgregarDiagnostico from './DiagnosticosComponents/AgregarDiagnostico';
import EditarDiagnostico from './DiagnosticosComponents/EditarDiagnostico';
import BuscarDiagnostico from './DiagnosticosComponents/BuscarDiagnostico';
import VerDiagnostico from './DiagnosticosComponents/VerDiagnostico';

import ConsultarTratamiento from './TratamientosComponents/ConsultarTratamiento';
import AgregarTratamiento from './TratamientosComponents/AgregarTratamiento';
import EditarTratamiento from './TratamientosComponents/EditarTratamiento';
import BuscarTratamiento from './TratamientosComponents/BuscarTratamiento';
import VerTratamiento from './TratamientosComponents/VerTratamiento';

import ConsultarExamen from './ExamenesComponents/ConsultarExamen';
import AgregarExamen from './ExamenesComponents/AgregarExamen';
import EditarExamen from './ExamenesComponents/EditarExamen';
import BuscarExamen from './ExamenesComponents/BuscarExamen';
import VerExamen from './ExamenesComponents/VerExamen';

import NotFound from './LayoutComponents/NotFound';


const App = () => {
    return(
        <Router className="container">
            <Switch>

                <Route exact path="/" component={Home}/>

                <Route exact path="/expedientes" component={ConsultarExpediente} />
                <Route exact path="/expedientes/crear" component={AgregarExpediente} />
                <Route exact path="/expedientes/:codigo/editar" component={EditarExpediente} />
                <Route exact path="/expedientes/:codigo/ver" component={VerExpediente} />
                <Route exact path="/expedientes/:param_busqueda/buscar" component={BuscarExpediente} />

                <Route exact path="/expedientes/:codigo/antecedentes/crear" component={AgregarAntecedente} />
                <Route exact path="/expedientes/:codigo/antecedentes/editar" component={EditarAntecedente} />
                <Route exact path="/expedientes/:codigo/hospitalizaciones/crear" component={AgregarHospitalizacion} />
                <Route exact path="/expedientes/:codigo/hospitalizaciones/:id_hospitalizacion/editar" component={EditarHospitalizacion} />
                <Route exact path="/expedientes/:codigo/hospitalizaciones/:id_hospitalizacion/ver" component={VerHospitalizacion} />

                <Route exact path="/diagnosticos" component={ConsultarDiagnostico} />
                <Route exact path="/diagnosticos/crear" component={AgregarDiagnostico} />
                <Route exact path="/diagnosticos/:codigo/editar" component={EditarDiagnostico} />
                <Route exact path="/diagnosticos/:codigo/ver" component={VerDiagnostico} />
                <Route exact path="/diagnosticos/:param_busqueda/buscar" component={BuscarDiagnostico} />

                <Route exact path="/examenes" component={ConsultarExamen} />
                <Route exact path="/examenes/crear" component={AgregarExamen} />
                <Route exact path="/examenes/:codigo/editar" component={EditarExamen} />
                <Route exact path="/examenes/:codigo/ver" component={VerExamen} />
                <Route exact path="/examenes/:param_busqueda/buscar" component={BuscarExamen} />

                <Route exact path="/tratamientosmedicos" component={ConsultarTratamiento} />
                <Route exact path="/tratamientosmedicos/crear" component={AgregarTratamiento} />
                <Route exact path="/tratamientosmedicos/:codigo/editar" component={EditarTratamiento} />
                <Route exact path="/tratamientosmedicos/:codigo/ver" component={VerTratamiento} />
                <Route exact path="/tratamientosmedicos/:param_busqueda/buscar" component={BuscarTratamiento} />


                <Route component={NotFound} />
            </Switch>
        </Router>

    );
};

ReactDOM.render(<App />, document.getElementById('app'));
