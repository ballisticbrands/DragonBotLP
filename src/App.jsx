import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Chats from './pages/Chats';
import Privacy from './pages/Privacy';
import LandingV2 from './pages/LandingV2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/v2" element={<LandingV2 />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/chats/:chatSlug" element={<Chats />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App