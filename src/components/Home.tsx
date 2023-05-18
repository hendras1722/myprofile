import { useState, useEffect, useRef } from "react";
import Typed from "typed.js";
import { useNavigate } from "react-router-dom";
import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import DuarrGif from "../assets/duarr.gif";

function App() {
  const [codeStatus, setCodeStatus] = useState<boolean>();
  const el = useRef(null);
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
    const a = [true, false];
    const randomValue = false;
    // const randomValue = a[Math.floor(a.length * Math.random())];

    const typed = new Typed(el.current, {
      strings: randomValue
        ? [
            'npm install MSA^3000\n `Installing components...` ^3000\n `Fetching from source...`^3000\n `<span style="color: green">Success 200</span>`^3000 `🤪`\n `====================`\n `MSA Begin`\n `====================`\n',
          ]
        : [
            'npm install MSA^3000\n `Installing components...` ^3000\n `Fetching from source...`^3000\n `<span style="color: red">Failed 403</span>`^3000 `😭`\n `====================`\n `Oh no, please try again...`\n `====================`\n',
          ],
      typeSpeed: 80,
      smartBackspace: true,
      onComplete: function () {
        setCodeStatus(randomValue);
      },
    });

    sessionStorage.removeItem("poor");
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
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
          $ <span ref={el} />
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
            <div>
              <Button onClick={handleRetry} colorScheme="red">
                Retry
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
