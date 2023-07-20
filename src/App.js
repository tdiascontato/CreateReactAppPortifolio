import React,{createContext, useState} from "react";
import { Outlet } from "react-router-dom";
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18next from 'i18next';

import global_en from './translate/en/global.json';
import global_pt from './translate/pt/global.json';
import AppStylus from "./AppStylus";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export const ThemeContext = createContext(null);

export default function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((curr)=>(curr === "light" ? "dark" : "light"));
  }

  const [t, i18n] = useTranslation("global");

  
  const [language, setLanguage] = useState('en');
  const toggleLanguage = () => {
    language === 'pt' ? setLanguage('en') : setLanguage('pt')
  }

  i18next.init({
    interpolation: {escapeValue: false},
    lng: `${language}`,
    resources:{
      pt: {
        global: global_pt
      },
      en: {
        global: global_en
      }
    }
  })

  return (
//Onde vou redirecionar os links e fixar o header e footer?
  <>
  <ThemeContext.Provider value={{theme, toggleTheme}}>
    <I18nextProvider i18n={i18next}>
      <AppStylus />
          <div className="App" id={theme}>
          
                <NavBar modeScreen={toggleTheme} modeLanguage={toggleLanguage}/>
                <div className="Content">
                  <Outlet />
                </div>
                  
                <div className="Footer">
                  <Footer />
                </div>
          </div>
    </I18nextProvider>
  </ThemeContext.Provider>
  </>
  );
}