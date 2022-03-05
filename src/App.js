import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar/NavBar';
import DetailPage from "./pages/DetailPage";
import ProductsPage from "./pages/ProductsPage";

const App = () => {
  return (
    <Router>

      <NavBar />
      
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/product/:id" element={<DetailPage />} />
      </Routes>

    </Router>
  )
}

export default App