import { BrowserRouter, Routes, Route, Link, UNSAFE_createClientRoutesWithHMRRevalidationOptOut } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => resolve(import("./components/Home.jsx")), 1500);
  })
);
const About = lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => resolve(import("./components/About.jsx")), 1500);
  })
);
const Contact = lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => resolve(import("./components/Contact.jsx")), 1500);
  })
);
// const Profile = lazy(() => import("./components/Profile.jsx"));
const Dashboard = lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => resolve(import("./components/Dashboard.jsx")), 1500);
  })
);

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        {/* <Link to="/profile">Profile</Link> |{" "} */}
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;


