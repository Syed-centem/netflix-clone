import React, { useState, useEffect } from 'react';
import axios from '../axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  // Click handler with the safety check added
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
        .then((url) => {
          // Safety check: Only parse if the URL was successfully found
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

  return (
    <div className="pl-12 py-4">
      <h2 className="text-white text-xl font-bold mb-4">{title}</h2>

      <div className="flex overflow-x-auto space-x-4 p-4 -ml-4 scrollbar-hide">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
            (!isLargeRow && movie.backdrop_path)) && (
              <img
                key={movie.id}
                onClick={() => handleClick(movie)}
                className={`object-contain transition-transform duration-300 hover:scale-110 cursor-pointer ${
                  isLargeRow ? "max-h-64 rounded-md" : "max-h-36 rounded"
                }`}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name || movie.title}
              />
            )
        )}
      </div>
      
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} className="mt-4 pr-12" />}
    </div>
  );
}

export default Row;