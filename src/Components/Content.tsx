import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from '../Pages/SharedLayout/SharedLayout';
import About from '../Pages/About/About';
import Home from '../Pages/Home/Home';
import Find from '../Pages/Find/Find';
import Login from '../Pages/Login/Login';
import Sign from '../Pages/Sign/Sign';

const Content = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/about" element={<About />} />
          <Route index element={<Home />} />
          <Route path="/find" element={<Find />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Sign />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Content;
