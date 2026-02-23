import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Chats from './pages/Chats';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/chats/:chatSlug" element={<Chats />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App