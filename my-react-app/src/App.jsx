import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LocationCard from './assets/components/LocationCard';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePages from './../src/assets/pages/HomePage';
import AboutPage from './assets/pages/about.jsx';
import ErrorPage from './../src/assets/components/ErrorPage.jsx';


const accommodationData = {
  id: "c67ab8a7",
  title: "Appartement cosy",
  cover: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
  description: "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.",
  location: "Ile de France - Paris 17e",
  price_per_night: 100, // Exemple de prix
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
      <Router>
            <Routes>
                <Route path='./../src/assets/pages/HomePage' element={<HomePages />} />
                <Route path='./assets/pages/about.jsx'element={<AboutPage />} />
                <Route path='./../src/assets/components/ErrorPage.jsx' element={<ErrorPage />} />
            </Routes>
        </Router>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <LocationCard
        title={accommodationData.title}
        cover={accommodationData.cover}
        description={accommodationData.description}
        location={accommodationData.location}
        price_per_night={accommodationData.price_per_night}
      />
    </>
  );
}

export default App;