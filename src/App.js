import React,{createContext, useState} from "react";
import { Outlet } from "react-router-dom";

import AppStylus from "./AppStylus";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export const ThemeContext = createContext(null);

export default function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((curr)=>(curr === "light" ? "dark" : "light"));
  }
  return (
//Onde vou redirecionar os links e fixar o header e footer?
  <>
  <ThemeContext.Provider value={{theme, toggleTheme}}>
    <AppStylus />
        <div className="App" id={theme}>
        
              <NavBar modeScreen={toggleTheme}/>
              <div className="Content">
                <Outlet />
              </div>
                
              <div className="Footer">
                <Footer />
              </div>
        </div>
  </ThemeContext.Provider>
  </>
  );
}