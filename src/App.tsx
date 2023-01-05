import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { routersItems } from './utils/constants';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routersItems.map((route) => (
            <Route key={route.path} path={route.path} element={<route.element />} />
          ))}
        </Route>
      </Routes>
    </>
  );
}

export default App;
