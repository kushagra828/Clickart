import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailView from "./components/ItemDetails/DetailView";
import ContextProvider from "./context/ContextProvider";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { Box } from "@mui/material";
function App() {
  return (
    <div>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Box style={{ marginTop: 54 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product/:id" element={<DetailView />} />
              
            </Routes>
          </Box>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
