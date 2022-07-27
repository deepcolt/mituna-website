import React, { Suspense } from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import Loader from "./components/Loader";
import Terms from "./components/terms";
import Policy from "./components/policy";

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
        <Route path="/terms" element={<Terms />} />
        <Route path="/policy" element={<Policy />} />
      </Routes>
    </BrowserRouter>

  );
}


export default App;
