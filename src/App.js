import React from "react";
import { Outlet } from "react-router-dom";


import AppStylus from "./AppStylus";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function App() {
  return (
//Onde vou redirecionar os links e fixar o header e footer?
  <>
    <AppStylus />
      <>
        <div className="App">
        
              <NavBar />
              <div className="Content">
                <Outlet />
              </div>
                
              <div className="Footer">
                <Footer />
              </div>
        </div>
      </>
          
    
 </>
  );
}