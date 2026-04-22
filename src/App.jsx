import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Chats from './pages/Chats';
import Privacy from './pages/Privacy';
import Support from './pages/Support';
import Pricing from './pages/Pricing';
import GettingStarted from './pages/help/GettingStarted';
import BillingCredits from './pages/help/BillingCredits';
import AmazonIntegration from './pages/help/AmazonIntegration';
import SecurityPrivacy from './pages/help/SecurityPrivacy';
import AccountManagement from './pages/help/AccountManagement';
import FeatureRequests from './pages/help/FeatureRequests';
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
        <Route path="/support/getting-started" element={<GettingStarted />} />
        <Route path="/support/billing-credits" element={<BillingCredits />} />
        <Route path="/support/amazon-integration" element={<AmazonIntegration />} />
        <Route path="/support/security-privacy" element={<SecurityPrivacy />} />
        <Route path="/support/account-management" element={<AccountManagement />} />
        <Route path="/support/feature-requests" element={<FeatureRequests />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={<LandingV3 />} />
      </Routes>
    </Router>
  )
}

export default App