
import React from 'react';
// import LoginForm from './components/Newlogin';
import Newlogin from './components/Newlogin'
import 'bootstrap/dist/css/bootstrap.min.css'
import './components/Newlogin.css'
import Table from './components/Table';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TestTable from './components/TestTable';

const App: React.FC = () => {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Newlogin/>}></Route>
      <Route path='/Table' element={<Table/>}></Route>
      <Route path='/TestTable' element={<TestTable/>}></Route>
     </Routes>
    </BrowserRouter>
  );
};

export default App;
