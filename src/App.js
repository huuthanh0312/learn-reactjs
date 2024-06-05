//import './App.css';
import { Link, NavLink, Navigate, Route, Routes } from 'react-router-dom';
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';
import NotFound from './compoments/NotFound';

function App() {
  return (
    <div className="App">
      Home Page
      <p>
        <Link to="/todos">Todo</Link>
      </p>
      <p>
        <Link to="/albums">Album</Link>
      </p>
      {/* <Navigate from="/home" to="/" exact /> */}
      <Routes>
        <Route path="/" />
        <Route path="/todos/*" element={<TodoFeature />} />
        <Route path="/albums/*" element={<AlbumFeature />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      Footer
    </div>
  );
}

export default App;
