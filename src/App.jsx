import "./app.scss";
import About from "./components/about/about";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="About">
        <About />
      </section>

      <section id="Portfolio">
        <Parallax type="Portfolio" />
      </section>

      <Portfolio />
      <section id="Contact">
        <Parallax type="contact" />

      </section>

      <section id="Contactt">

        <Contact />

      </section>


    </div>
  );
};

export default App;
