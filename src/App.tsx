import { BrowserRouter, Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Read from "./components/Read";
import Create from "./components/Create";
import Update from "./components/Update";


function App() {

  return (
    <div>
      <Navbar></Navbar>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/create" element={<Create/>}></Route>
        <Route path="/update/:id" element={<Update/>}></Route>
        <Route path="/read/:id" element={<Read/>}></Route>
      </Routes>
      
      
      </BrowserRouter>
    </div>
  );
}
export default App;
