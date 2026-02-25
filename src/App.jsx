import React from 'react';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Row from './components/Row';
import requests from './requests';

function App() {
  return (
    <div className="min-h-screen bg-black flex">
      {/* Fixed Sidebar */}
      <Nav />
      
      {/* Main Content Area - margin left to offset the fixed sidebar */}
      <main className="flex-1 ml-20 overflow-x-hidden flex flex-col">
        {/* Banner and Rows */}
        <Banner />
        <Row 
          title="Trending Now" 
          fetchUrl={requests.fetchTrending} 
          isLargeRow 
        />
        <Row title="New This Week" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        
        {/* Developer Credit Footer */}
        <footer className="w-full text-center py-8 mt-auto text-gray-500 text-sm">
          <p>
            Developed by <span className="text-red-600 font-semibold tracking-wider">Syed Junaid Hussain</span>
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;