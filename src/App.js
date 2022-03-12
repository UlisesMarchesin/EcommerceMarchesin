import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { CartContextProvider } from "./components/Context/CartContext";
import NavBar from './components/NavBar/NavBar';
import DetailPage from "./pages/DetailPage";
import ProductsPage from "./pages/ProductsPage";

const App = () => {
  return (
    <CartContextProvider>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="categoria" element={<ProductsPage />}>
            <Route path=":category" element={<ProductsPage />} />
          </Route>
          <Route path="/product/:id" element={<DetailPage />} />
        </Routes>
      </Router>
    </CartContextProvider>
  );
}

export default App