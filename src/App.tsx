import { useEffect, useState } from "react";
import Home from "./components/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Me from "./components/Me";
import About from "./components/about";

function App() {
  const [sessionState, setSessionState] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const session: string = sessionStorage.getItem("poor") || "";
    if (!session) {
      navigate("/");
    }
    setSessionState(session);
  }, [navigate, sessionState]);
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/me" element={<Me />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
