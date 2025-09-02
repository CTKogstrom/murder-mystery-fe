import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { AuthProvider } from './components/auth/AuthContext'
import ProtectedRoute from './components/routing/ProtectedRoute'
import LandingPage from './pages/LandingPage'
import DashboardPage from './pages/DashboardPage'

function App() {

  return (
    <div className="bg-spooky-background text-spooky-font">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>} 
            />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </Router>
    </AuthProvider>
    </div>
    
  )
}

export default App
