import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { Loading } from './Components/Loading';
import { ScrollToTop } from './Libraries/ScrollToTop';
import { Layout } from './Components/Layout';
import { Home } from './Pages/Home';
import { Whitepaper } from './Pages/Whitepaper';
import { Manifesto } from './Pages/Manifesto';
import HowToBuy from './Pages/HowToBuy/HowToBuy';
import { NotFound } from './Pages/NotFound';
import './index.css';

function App() {
  return (
    <Router>
      {/* <CookieConsent /> */}
      {/* <Loading /> */}
      {/* Wrap Routes with ScrollToTop */}
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/how-to-buy" element={<HowToBuy />} />
          <Route path="/whitepaper" element={<Whitepaper />} />
          <Route path="/manifesto" element={<Manifesto />} />
          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
