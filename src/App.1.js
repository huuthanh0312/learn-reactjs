import { Link, Route, Routes } from "react-router-dom";
import AlbumFeature from "./features/Album";
import TodoFeature from "./features/Todo";

export function App() {
  return (
    <div className="App">
      Home Page
      <p>
        <Link to="/todos">Todo</Link>
      </p>
      <p>
        <Link to="/albums">Album</Link>
      </p>
      <Routes>
        <Route
          path="/todos"
          element={<TodoFeature />}
        />
        <Route
          path="/albums"
          element={<AlbumFeature />}
        />
      </Routes>
      Footer
    </div>
  );
}
