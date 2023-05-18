import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Me from "./components/Me";
import About from "./components/about";

function App() {
  const navigate = useNavigate();
  const [sessionState, setSessionState] = useState("");
  useEffect(() => {
    const session: string = sessionStorage.getItem("poor");
    setSessionState(session);
    if (!session) {
      navigate("/");
    }
  }, [sessionState]);
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/me" element={<Me />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
