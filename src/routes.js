import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Menu from 'Components/Menu';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import Header from 'Components/Header';

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<Header />} >
            <Route index element={<Inicio />} />
            <Route path='cardapio' element={<Cardapio />} />
          </Route>
          <Route path='/cardapio2' element={<Cardapio />} />
        </Routes>
      </Router>
    </main>
  );
}
