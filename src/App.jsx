import Affilated from "./components/Affilated";
import Header from "./components/Header/Header";
import Home from "./components/Home";
import Testimonial from "./components/testimonial";
import Footer  from "./components/Footer";
import Navbar from "./components/Navbar";




function App() {
  return (
    <div className="App">
       <Navbar />
     <Home/>
   
     <Affilated/>
     <Testimonial/>
     <Footer/>
    </div>
  );
};

export default App;
