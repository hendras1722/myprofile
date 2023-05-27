import { useState, useEffect, useRef } from "react";
import { Typed } from "typed.ts";
import { useNavigate } from "react-router-dom";
import {
  Button,
  useDisclosure,
  Modal,
  ModalContent,
  ModalBody,
} from "@chakra-ui/react";
import DuarrGif from "../assets/duarr.gif";

function App() {
  const [codeStatus, setCodeStatus] = useState<boolean>();
  const el = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleNext = () => {
    onOpen();
    sessionStorage.setItem("poor", "true");
    setTimeout(() => {
      onClose();
      navigate("/me");
    }, 1500);
  };

  useEffect(() => {
    const typed = new Typed({
      callback: (text) => {
        if (el.current) {
          el.current.innerHTML = text;
        }
      },
    });
    const type = async () => {
      const line1 = "npm install MSA\n";
      const line2 = "Installing components...\n";
      const line3 = "Fetching from source...\n";
      const line4 = "Success 200 🤪\n";
      const line5 = `Failed 403 😭\n`;

      const a = [true, false];
      const randomValue = a[Math.floor(a.length * Math.random())];
      console.log(randomValue);
      typed.type(line1, { errorMultiplier: 0 });
      typed.wait(3000);
      typed.type(line2, { errorMultiplier: 0 });
      typed.wait(3000);
      typed.type(line3, { errorMultiplier: 0 });
      typed.wait(3000);
      if (randomValue) {
        typed.type(line4, { errorMultiplier: 0, className: "successTyped" });
        typed.wait(3000);
        typed.type("====================\n", { errorMultiplier: 0 });
        typed.wait(1000);
        typed.type("MSA Begin\n", {
          errorMultiplier: 0,
          className: "fontWeight",
        });
        typed.wait(1000);
        typed.type("====================\n", { errorMultiplier: 0 });
        typed.wait(1000);
      } else {
        typed.type(line5, {
          errorMultiplier: 0,
          noSpecialCharErrors: true,
          className: "errorTyped",
        });
        typed.wait(3000);
        typed.type("====================\n", { errorMultiplier: 0 });
        typed.wait(1000);
        typed.type("Oh no, please try again...\n", {
          errorMultiplier: 0,
          className: "fontWeight",
        });
        typed.wait(1000);
        typed.type("====================\n", { errorMultiplier: 0 });
        typed.wait(1000);
      }
      await typed.run();
      setCodeStatus(randomValue);

      // typed.reset();
    };
    type();

    sessionStorage.removeItem("poor");
  }, []);

  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <>
      <div style={{ padding: 10 }}>
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              color: "white",
              fontWeight: "bold",
              right: 10,
              top: 8,

              borderRadius: "50%",
              width: 10,
              height: 10,
              background: "red",
            }}
          ></div>
        </div>
        <div
          style={{
            background: "black",
            padding: 10,
            height: 300,
            borderTop: "25px solid blue",
            borderRadius: 8,
            color: "white",
            textAlign: "left",
            fontSize: 22,
            whiteSpace: "pre-line",
            overflow: "auto",
          }}
        >
          $ <span ref={el} /> <span>|</span>
        </div>
        <Modal onClose={onClose} size={"full"} isOpen={isOpen}>
          <ModalContent className="modalContent">
            <ModalBody className="modalBodyCustom">
              <img src={DuarrGif} style={{ width: "50%" }} />
            </ModalBody>
          </ModalContent>
        </Modal>

        {codeStatus && (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <Button onClick={handleNext} colorScheme="blue">
                Lanjutkan
              </Button>
            </div>
          </>
        )}
        {codeStatus === false && (
          <>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <p>
                <q
                  style={{
                    fontWeight: "bold",
                    color: "#7d7d7d",
                    fontStyle: "italic",
                  }}
                >
                  Masih gagal tetap lah mencoba kesempatan tidak akan datang
                  untuk orang yang tidak ingin mencoba
                </q>
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <Button onClick={handleRetry} colorScheme="red">
                Retry
              </Button>
            </div>
            <div className="text-center">
              Sudah menyerah ?{" "}
              <a
                href="javascript:void(0)"
                onClick={handleNext}
                className="text-blue-700"
                font-bold
              >
                {" "}
                klik disini
              </a>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
