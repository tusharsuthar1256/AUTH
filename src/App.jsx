import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Nav/Nav';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
import AllPosts from './Pages/AllPosts/AllPosts';
import MyPost from './Pages/MyPost/MyPost';
import ProtectedRoute from './Components/ProtectedROute/ProtectedROute';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/allposts" element={<AllPosts />} />
            <Route path="/myposts" element={<MyPost />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
