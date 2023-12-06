import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Service from "./Pages/Service";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Testimonial from "./Pages/Testimonial";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/service"
            element={
              <>
                <Header />
                <Service />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/about"
            element={
              <>
                <Header />
                <About />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/project"
            element={
              <>
                <Header />
                <Project />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/testimonial"
            element={
              <>
                <Header />
                <Testimonial />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/contact"
            element={
              <>
                <Header />
                <Contact />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <>
                <Header />
                <Login />
                <Footer />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
