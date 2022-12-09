import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home/Home";
import Navigation from "./routes/Navigation/Navigation"

const App = () => {



  const Shop = () => {
    return (
      <h1>ullla</h1>
    )
  }
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route >
    </Routes>
  );
}

export default App;
