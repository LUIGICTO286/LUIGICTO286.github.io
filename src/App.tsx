import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { Loading } from './Components/Loading';
import { ScrollToTop } from './Components/ScrollToTop';
import { Layout } from './Components/Layout';
import { Home } from './Pages/Home';
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
          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
