import React, { CSSProperties, Suspense, useEffect, useState } from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import Loader from "./components/Loader";

const Home = React.lazy(() => import('./components/Home'));

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          (
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          )} />
      </Routes>
    </BrowserRouter>

  );
}


export default App;
