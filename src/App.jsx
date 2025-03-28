import './App.css';
import Layout from './Layout/Layout';
import Layout2 from './Layout/Layout2';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { roots } from './Routes/Routes';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {roots.map((route, i) => 
        route.path == '/SignUp' ? (
          <Route key={i} path={route.path} element={<Layout2>{route.element}</Layout2>} />
        ) : (
          <Route key={i} path={route.path} element={<Layout>{route.element}</Layout>} />
        )
      )}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
