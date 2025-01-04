import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About'; // Import the About component
import './App.scss';
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Routes>
        {/* Define the main layout with nested routes */}
        <Route path="/" element={<Layout />}>
          {/* Default route */}
          <Route index element={<Home />} />
          {/* About page route */}
          <Route path="about" element={<About />} />

          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
