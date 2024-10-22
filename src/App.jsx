import "./App.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from "./components/header/Header";
function App() {
  return <div className="app">
    <BrowserRouter>
    <Header />
    <Routes>
      <Route/>
    </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
