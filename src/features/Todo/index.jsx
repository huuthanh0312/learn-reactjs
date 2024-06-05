import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';

TodoFeature.propTypes = {};

function TodoFeature(props) {
  return (
    <div>
      Todo Shared UI
      <nav>
        <Link to="listpage">List Page</Link>
      </nav>
      <nav>
        <Link to="detail-page">Detail Page</Link>
      </nav>
      <Routes>
        <Route path="/listpage" element={<ListPage />}></Route>
        <Route path="/detail-page" element={<DetailPage />}></Route>
      </Routes>
    </div>
  );
}

export default TodoFeature;
