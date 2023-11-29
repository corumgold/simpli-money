import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Reviews from "./components/Reviews";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Form from "./components/Form";

function App() {
  return (
    <main className="app">
      <Nav />
      <Hero />
      <AboutMe />
      <Reviews />
      <Form />
      <Footer />
    </main>
  );
}

export default App;
