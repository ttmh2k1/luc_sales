import React from 'react';
import { Navigate } from 'react-router-dom';

import HomeComponent from '../features/home/Component';

function Home() {
  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" />
  }
  return <HomeComponent />
}

export default Home;
