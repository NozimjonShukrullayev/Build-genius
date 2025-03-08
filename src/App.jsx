import "../src/modules/Translations/Translations";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./components/Layout/MainLayout/MainLayout";
import { Main } from "./modules/Main/Main";
import { Meeting } from "./modules/Meeting/Meeting";
import { MainContextProvider } from "./modules/MainContext/MainContext";
import { useState } from "react";

function App() {
  const [change, setChange] = useState(false);

  const toggleTheme = () => {
    setChange((prevMode) => !prevMode);
  };

  return (
    <MainContextProvider value={{ change, toggleTheme }}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<MainLayout />}>
            <Route path="/" element={<Main />} />
            <Route path="/meeting" element={<Meeting />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MainContextProvider>
  );
}

export default App;
