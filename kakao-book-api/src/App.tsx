import React from 'react';
import HomePage from './pages/Home';
import SearchPage from './pages/Search';
import AuthenticatedRoute from './components/common/AuthenticatedRoute';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route
          path='/search'
          element={<AuthenticatedRoute component={<SearchPage />} />}
        />
        {/* <SecretRoute path="/search" redirect="/" element={<SearchPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
