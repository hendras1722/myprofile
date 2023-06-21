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

// Generated by https://quicktype.io

export interface IHTMLTerimnal {
  item: Item;
  index: number;
}

export interface Item {
  html: string;
}

function App() {
  const [codeStatus, setCodeStatus] = useState<boolean>();
  const container_typing = document.getElementById("container_typing");

  const el = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dataTerminal, setDataTerminal] = useState([
    {
      html: "text",
    },
  ]);

  const handleNext = () => {
    onOpen();
    sessionStorage.setItem("poor", "true");
    setTimeout(() => {
      onClose();
      navigate("/me");
    }, 1500);
  };

  useEffect(() => {
    const typing_text = document.getElementById(`typing_text0`);
    if (typing_text) typing_text.focus();
    typeText("mount");
    sessionStorage.removeItem("poor");
  }, []);

  const handleRetry = () => {
    window.location.reload();
  };

  const typeText = (e: string) => {
    const typed = new Typed({
      callback: (text) => {
        if (el.current) {
          el.current.innerHTML = text;
        }
      },
    });
    const type = async () => {
      let line1 = "";
      let line2 = "";
      let line3 = "";
      let line4 = "";
      let line5 = "";
      let randomValue = undefined;
      const a = [true, false];
      if (e === "npm") {
        randomValue = a[Math.floor(a.length * Math.random())];
        line1 = "npm install MSA\n";
        line2 = "Installing components...\n";
        line3 = "Fetching from source...\n";
        line4 = "Success 200 🤪\n";
        line5 = `Failed 403 😭\n`;
      }
      if (e === "name") {
        line1 = "My Name is Muh Syahendra A";
        line2 = "";
        line3 = "";
        line4 = "";
        line5 = ``;
      }
      if (e === "mount") {
        line1 = "Instruction:\n";
        line2 =
          "npm install msa => for get my profile\n name or my name => for get my name";
        line3 = "";
        line4 = "";
        line5 = ``;
      }
      const birtday = new Date("1996-12-22");
      const today = new Date();

      const ageMilisecond = Number(today) - Number(birtday);
      const ageYears = Math.floor(
        ageMilisecond / (1000 * 60 * 60 * 24 * 365.25)
      );

      if (e === "age") {
        line1 = ageYears + " " + "years old";
        line2 = "";
        line3 = "";
        line4 = "";
        line5 = ``;
      }

      if (line1) {
        typed.type(line1, { errorMultiplier: 0 });
        typed.wait(1500);
        if (container_typing)
          container_typing.scrollTo({
            left: 0,
            top: 10000000000000000,
            behavior: "smooth",
          });
      }
      if (line2) {
        typed.type(line2, { errorMultiplier: 0 });
        typed.wait(1500);
        if (container_typing)
          container_typing.scrollTo({
            left: 0,
            top: 10000000000000000,
            behavior: "smooth",
          });
      }
      if (line3) {
        typed.type(line3, { errorMultiplier: 0 });
        typed.wait(1500);
        if (container_typing)
          container_typing.scrollTo({
            left: 0,
            top: 10000000000000000,
            behavior: "smooth",
          });
      }
      if (randomValue) {
        if (line4) {
          typed.type(line4, { errorMultiplier: 0, className: "successTyped" });
          typed.wait(1500);
          if (container_typing)
            container_typing.scrollTo({
              left: 0,
              top: 10000000000000000,
              behavior: "smooth",
            });

          typed.type("====================\n", { errorMultiplier: 0 });
          typed.wait(1000);
          if (container_typing)
            container_typing.scrollTo({
              left: 0,
              top: 10000000000000000,
              behavior: "smooth",
            });

          typed.type("MSA Begin\n", {
            errorMultiplier: 0,
            className: "fontWeight",
          });
          typed.wait(1000);
          typed.type("====================\n", { errorMultiplier: 0 });
          if (container_typing)
            container_typing.scrollTo({
              left: 0,
              top: 10000000000000000,
              behavior: "smooth",
            });

          typed.wait(1000);
          if (container_typing)
            container_typing.scrollTo({
              left: 0,
              top: 10000000000000000,
              behavior: "smooth",
            });
        }
      } else {
        if (line5) {
          typed.type(line5, {
            errorMultiplier: 0,
            noSpecialCharErrors: true,
            className: "errorTyped",
          });
          typed.wait(3000);
          if (container_typing)
            container_typing.scrollTo({
              left: 0,
              top: 10000000000000000,
              behavior: "smooth",
            });

          typed.type("====================\n", { errorMultiplier: 0 });
          typed.wait(1000);
          if (container_typing)
            container_typing.scrollTo({
              left: 0,
              top: 10000000000000000,
              behavior: "smooth",
            });

          typed.type("Oh no, please try again...\n", {
            errorMultiplier: 0,
            className: "fontWeight",
          });
          typed.wait(1000);
          if (container_typing)
            container_typing.scrollTo({
              left: 0,
              top: 10000000000000000,
              behavior: "smooth",
            });

          typed.type("====================\n", { errorMultiplier: 0 });
          typed.wait(1000);
        }
      }
      await typed.run();
      setDataTerminal((prev) => [
        ...prev,
        {
          html: "input",
        },
      ]);
      if (container_typing)
        container_typing.scrollTo({
          left: 0,
          top: 10000000000000000,
          behavior: "smooth",
        });

      setCodeStatus(randomValue);
    };
    type();
  };

  const handleSubmit = (e: React.KeyboardEvent, props: IHTMLTerimnal) => {
    let value = null;
    console.log(e, "inie");
    const typing_text = document.getElementById(`typing_text${props.index}`);
    value = typing_text?.innerText;
    console.log(value, "inivalue");
    const charCode = e.keyCode || e.which;
    if (!typing_text) return;
    if (charCode === 13 || e.key === "Enter") {
      typing_text.blur();
      typing_text.setAttribute("contentEditable", "false");

      if (value?.includes("npm")) {
        if (
          value.toLocaleLowerCase().includes("npm i") ||
          value.toLocaleLowerCase().includes("npm install") ||
          value.toLocaleLowerCase().includes("npm i msa") ||
          value.toLocaleLowerCase().includes("npm install msa")
        ) {
          setDataTerminal([
            ...dataTerminal,
            {
              html: "text",
            },
          ]);
          typeText("npm");

          if (container_typing)
            container_typing.scrollTo({
              left: 0,
              top: 10000000000000000,
              behavior: "smooth",
            });
        }
        return;
      }
      if (
        value?.toLocaleLowerCase().includes("name") ||
        value?.toLocaleLowerCase().includes("my name")
      ) {
        setDataTerminal([
          ...dataTerminal,
          {
            html: "text",
          },
        ]);
        typeText("name");
        return;
      }
      if (
        value?.toLocaleLowerCase().includes("umur") ||
        value?.toLocaleLowerCase().includes("age")
      ) {
        setDataTerminal([
          ...dataTerminal,
          {
            html: "text",
          },
        ]);
        typeText("age");
        return;
      }
      setDataTerminal([
        ...dataTerminal,
        {
          html: "input",
        },
      ]);

      // return;
    }
  };
  function handleMouseEvent() {
    const typing_text = document.getElementById("typing_text");
    if (typing_text) {
      typing_text.focus();
    }
  }
  const HtmlTerminal = (props: IHTMLTerimnal) => {
    if (!props) return "wewe";
    if (props.item.html === "input") {
      return (
        <>
          <div className="flex">
            <span className="text-white">$ </span>
            <div className="text-white  w-screen ">
              <div>
                <div
                  id={"typing_text" + props.index}
                  contentEditable
                  className="text-white focus:outline-none ml-2 "
                  onKeyDown={(event) => handleSubmit(event, props)}
                  onMouseDown={handleMouseEvent}
                ></div>
              </div>
            </div>
          </div>
        </>
      );
    }
    if (props.item.html === "text") {
      return (
        <div
          style={{
            whiteSpace: "pre-line",
          }}
          className="text-white"
        >
          <span ref={el} />
        </div>
      );
    }
    return "hello";
  };

  return (
    <>
      <div>
        <div className="bg-blue-700 h-12 flex justify-end p-2 items-center">
          <div className="w-20 flex justify-between">
            <div className="bg-red-100 h-4 w-4 rounded-xl"></div>
            <div className="bg-red-100 h-4 w-4 rounded-xl"></div>
            <div className="bg-red-100 h-4 w-4 rounded-xl"></div>
          </div>
        </div>
        <div
          className="bg-black h-96 p-2 items-center h-9/6 overflow-auto py-3"
          id="container_typing"
        >
          {dataTerminal.map((item, index) => (
            <div key={index}>{HtmlTerminal({ item, index })}</div>
          ))}
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
