import React, { useState, useEffect } from 'react';
import axios from '../axios';
import requests from '../requests';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function Banner() {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  }

  // Click handler with the safety check for missing trailers
  const handlePlay = () => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then((url) => {
          if (url) {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
          } else {
            console.log("No trailer found for this movie.");
            alert("Sorry, we couldn't find a trailer for this specific title.");
          }
        })
        .catch((error) => console.log("Trailer search failed", error));
    }
  };

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      controls: 0, 
    },
  };

  return (
    <header
      className="relative h-[80vh] bg-cover bg-center text-white object-contain"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      {trailerUrl ? (
        <div className="absolute inset-0 z-40 bg-black">
          <button 
            onClick={() => setTrailerUrl("")} 
            className="absolute top-20 right-10 text-white text-2xl font-bold z-50 hover:text-red-600 cursor-pointer"
          >
            ✕
          </button>
          <YouTube 
            videoId={trailerUrl} 
            opts={opts} 
            className="w-full h-full" 
          />
        </div>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          
          <div className="relative pt-[25vh] px-12 h-full z-10">
            <h1 className="text-5xl font-bold pb-2">
              {movie?.title || movie?.name || movie?.original_name}
            </h1>
            
            <div className="flex space-x-4 mt-4">
              <button 
                onClick={handlePlay}
                className="bg-red-600 text-white font-bold py-2 px-8 rounded hover:bg-red-700 transition cursor-pointer"
              >
                Play
              </button>
              <button className="bg-gray-500/50 text-white font-bold py-2 px-8 rounded hover:bg-gray-500/70 transition cursor-pointer">
                Watch Trailer
              </button>
            </div>

            <h1 className="w-[45rem] leading-snug pt-4 text-sm font-semibold max-w-[360px] text-gray-200 shadow-md">
              {truncate(movie?.overview, 150)}
            </h1>
          </div>
        </>
      )}

      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20" />
    </header>
  );
}

export default Banner;