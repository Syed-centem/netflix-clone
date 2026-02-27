import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Default Route is the Login Screen */}
          <Route path="/" element={<LoginScreen />} />
          
          {/* Main App Route */}
          <Route path="/browse" element={<HomeScreen />} />
        </Routes>
      </div>
      {/* Developer Credit Footer */}
        <footer className="w-full text-center py-8 mt-auto text-gray-500 text-sm">
          <p>
            Developed by <span className="text-red-600 font-semibold tracking-wider">Syed Junaid Hussain</span>
          </p>
        </footer>
    </Router>
  );
}

export default App;
