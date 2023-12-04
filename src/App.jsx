import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import ProtectedRouter from "./utilitis/ProtectedRouter";
import Applayout from "./Applayout";
import Clothing from "./Pages/Clothing";
import Electronics from "./Pages/Electronics";
import Groceries from "./Pages/Groceries";
import Jewelries from "./Pages/Jewelries";
import SmartPhone from "./Pages/SmartPhone";
import ProductDetail from "./ui/ProductDetail";
import Cart from "./Pages/Cart";
import Search from "./Pages/Search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          element={
            <ProtectedRouter>
              <Applayout />
            </ProtectedRouter>
          }
        >
          <Route path="/home" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Clothing" element={<Clothing />} />
          <Route path="/Furnitures" element={<Electronics />} />
          <Route path="/Groceries" element={<Groceries />} />
          <Route path="/Jewelries" element={<Jewelries />} />
          <Route path="/SmartPhones" element={<SmartPhone />} />
          <Route path="/Search/:query" element={<Search />} />
          <Route
            path="/ProductDetails/:productId"
            element={<ProductDetail />}
          />
          <Route />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
