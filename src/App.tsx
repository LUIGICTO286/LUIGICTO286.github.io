import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import { Home } from './Pages/Home.tsx';
import { NotFound } from './Pages/NotFound.tsx';
import './index.css';

function App() {
  return (
    <Router>
      {/* Display CookieConsent for all routes */}
      {/* <CookieConsent /> */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          {/* Fallback Route */}
          <Route path="*" element={<Home />} />             
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
