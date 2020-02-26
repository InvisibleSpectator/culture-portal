import React from 'react';
import { Link } from 'react-router-dom';

import { Header } from './components/header';

const HomePage = () => (
  <div>
    <Header />
    <Link to = "/worklog">worklog</Link>
    <Link to = "/teampage">teampage</Link>
    <Link to="/search"> Search </Link>
    Home Page
  </div>
);

export default HomePage;