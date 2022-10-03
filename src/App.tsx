import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "./loader/Loader.container";
const Home = React.lazy(() => import("./home"));
const Event = React.lazy(() => import("./event"));
const Create = React.lazy(() => import("./create"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<Event />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
