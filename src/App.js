import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Shoes from "./Components/Shoes/Shoes";
import { getShoesFunc } from "./Redux/action";

function App() {

  
  


  return <div>{/* Code goes here */}
          <Navbar/>
          
          <Shoes/>
          </div>;
}



export default App;
