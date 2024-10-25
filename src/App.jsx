import "./App.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Signup from "./pages/signup/Signup";
import Signin from "./pages/signin/Signin";
import Cart from "./pages/cart/Cart";
import Profile from "./pages/profile/Profile";
import ProductForm from "./pages/addProduct/ProductForm";
import ShowProduct from "./pages/seller-showProducts/ShowProduct";
function App() {
  return <div className="app">
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/add-product" element={<ProductForm/>}/>
      <Route path="/products" element={<ShowProduct/>}/>





    </Routes>
    <Footer />
    </BrowserRouter>
  </div>;
}

export default App;
