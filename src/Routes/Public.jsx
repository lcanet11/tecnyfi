import {Route, Routes} from 'react-router-dom'
import Register from '../Pages/Register';
import Login from '../Pages/Login';
import NotFound from '../Pages/NotFound';
import Home from '../Pages/Home';
import MoreJobs from '../Pages/MoreJobs';
import Detalle from '../Pages/Detalle/Detalle'
import JobUpload from '../Pages/JobUpload';
import JobEdit from '../Pages/JobEdit';
import Events from '../Pages/Events';
import React from 'react';

function Public({setLogin}){
  return(
    <Routes>   
      <Route path='/' element={<Home />} />
      <Route path='/morejobs' element={<MoreJobs/>} />
      <Route path='/events' element={<Events/>} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login setLogin={setLogin} />} />
      <Route path='/job/:id' element={<Detalle />} />
      <Route path='/job/upload' element={<JobUpload/>} />
      <Route path='/job/edit/:id' element={<JobEdit />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default Public


/*
<Router>
  <ul>
    <li><Link to="/">Inicio</Link></li>
    <li><Link to="/alta">Registro</Link></li>
    <li><Link to="/ingresar">Ingresar</Link></li>
    <li><Link to="/contador">Contador</Link></li>
  </ul>
    
</Router>
*/

