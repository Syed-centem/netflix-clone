import React from 'react';
import Nav from './Nav';
import Banner from './Banner';
import Row from './Row';
import requests from '../requests';

function HomeScreen() {
  return (
    <div className="min-h-screen bg-black flex">
      <Nav />
      <main className="flex-1 ml-20 overflow-x-hidden flex flex-col">
        <Banner />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow />
        <Row title="New This Week" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      </main>
    </div>
  );
}

export default HomeScreen;