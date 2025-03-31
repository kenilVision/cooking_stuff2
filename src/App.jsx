import './App.css';
import Layout from './Layout/Layout';
import Layout2 from './Layout/Layout2';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import store from './Store/Store';
import { Provider } from 'react-redux';
import { roots , publicRoute } from './Routes/Routes';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        {roots.map((route, i) =><Route key={i} path={route.path} element={<Layout>{route.element}</Layout>} />)}
        {publicRoute.map((route , i )=><Route key={i+10} path={route.path} element={<Layout2>{route.element}</Layout2>} />)}
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
