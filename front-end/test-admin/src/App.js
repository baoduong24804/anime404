import './App.css';

import Menu from './components/admin/menu';
import HomePage from './components/homepage/homepage';
import Navigation from './components/homepage/navigation';
import { useState } from 'react';
import Anime from './components/user/anime404';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {


  return (
    <div className="App">
      
      <Router>
      <Navigation></Navigation>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<Anime />} />
          <Route path='/admin' element={<Menu></Menu>}></Route>
        </Routes>
      </Router>


      {/* <Flex gap="middle" vertical>
        <Flex vertical={false}>
          <Menu></Menu>
        </Flex>
      </Flex> */}

    </div>
  );
}

export default App;
