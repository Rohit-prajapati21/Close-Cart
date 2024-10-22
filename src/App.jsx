import "./App.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
function App() {
  return <div className="app">
    <BrowserRouter>
    <Header />
    <Routes>
      <Route/>
    </Routes>
    <Footer />
    </BrowserRouter>
  </div>;
}

export default App;
