import "./App.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
function App() {
  return <div className="app">
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  </div>;
}

export default App;
