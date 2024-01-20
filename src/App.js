import react from 'react';
import 'animate.css/animate.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Button from 'react-bootstrap/Button';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Homepage from './Component/Homepage/Homepage';
import Registration from './Component/Header/Registration/Registration';


function App() {
  return (
    <BrowserRouter >
      <Header />
      <div className='app'>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/learn' element={<h1>Learnpage</h1>} />
          <Route path='/reference' element={<h1>Referencepage</h1>} />
          <Route path='/community' element={<h1>Communitypage</h1>} />
          <Route path='/ourcommunity' element={<h1>OurCommunitypage</h1>} />
          <Route path='/mycommunity' element={<h1>MyCommunitypage</h1>} />
          <Route path='/blog' element={<h1>Blogpage</h1>} />
          <Route path='/git' element={<h1>Gitgpage</h1>} />
          <Route path='/github' element={<h1>Githubgpage</h1>} />
          <Route path='/register' element={<h1>regitration</h1>} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>


  );
}

export default App;
