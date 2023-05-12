import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Social from "./components/Social";

function App() {
  return (
   <div>
   {/* <h1 className="text-4xl font-bold font-signature">Hello</h1> */}
   <NavBar />
   <Home />
   <Social/>
   <About />
   <Portfolio />
   <Experience />
   <Contact />
   </div>
  );
}

export default App;
