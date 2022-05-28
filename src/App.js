import React from "react";
import "./App.css";
import Row from "./components/row/Row";
import requests from "./requests";
import Banner from "./components/banner/Banner";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <div className="app">
      {/**Nav Bar */}
      <Nav />
      {/**Banner */}
      <Banner />
      {/**Rows */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginal}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;

// e8475939016d04144a33ef98c6e0206d
