import { Footer } from "./components/Footer";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Products } from "./pages/Products";
import { Profile } from "./pages/Profile";
import { About } from "./pages/About";
import "./App.css";
import { ProductDetails } from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<Home/>}/>
          
          <Route path="/about" element={<About/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/product/:id" element={<ProductDetails/>}/>
        </Routes>
        <Footer/>
      </Router>
      
      
    </div>
  );
}

export default App;
