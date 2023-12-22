import { Route, Routes } from "react-router-dom";
import "./App.css";
import { listRouter } from "./contstant";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Routes>
      {listRouter?.map((router, index) => (
        <Route path={router.path} element={router?.element} key={index} />
      ))}
    </Routes>
  );
}

export default App;
