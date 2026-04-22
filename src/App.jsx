import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Chats from './pages/Chats';
import Privacy from './pages/Privacy';
import Support from './pages/Support';
import Pricing from './pages/Pricing';
import LandingV2 from './pages/LandingV2';
import LandingV3 from './pages/LandingV3';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingV3 />} />
        <Route path="/v1" element={<Home />} />
        <Route path="/v2" element={<LandingV2 />} />
        <Route path="/v3" element={<LandingV3 />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/chats/:chatSlug" element={<Chats />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/support" element={<Support />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={<LandingV3 />} />
      </Routes>
    </Router>
  )
}

export default App