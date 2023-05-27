import { HStack, Box, Heading, Text, Divider } from "@chakra-ui/react";
import ItsMe from "../assets/me.jpeg";
import { Github } from "../modules/github.ts";
import { useState } from "react";

function Me() {
  const [stateGithub, setStateGithub] = useState<Github[]>([]);
  // const [stateLinkedin, setStateLinkedin] = useState<string>("");
  const [stateWhatsapp, setStateWhatsapp] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  function detectMob() {
    const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i,
    ];

    return toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
    });
  }

  const handleClick = async (e: string): Promise<void> => {
    switch (e) {
      case "github":
        setOpen(false);
        try {
          const res = await fetch(
            "https://api.github.com/users/hendras1722/repos"
          );
          const datas = await res.json();
          setTimeout(() => {
            window.scroll({
              behavior: "smooth",
              top: 500,
            });
          }, 300);
          setStateGithub(datas);
        } catch (error) {
          if (error instanceof Error) {
            console.error(error.message);
          }
        }
        break;
      case "linkedin":
        setStateGithub([]);
        setOpen(false);
        window.open(`https://www.linkedin.com/in/muhsyahendraa/`, "_blank");
        break;
      case "whatsapp":
        window.scroll({
          behavior: "smooth",
          top: 30,
        });
        setStateGithub([]);
        setOpen(true);
        break;

      default:
        break;
    }
  };

  const handleWhatsapp = () => {
    console.log(detectMob(), "inim");
    if (detectMob()) {
      return window.open(
        `whatsapp://send?text=${encodeURIComponent(stateWhatsapp)}`,
        "_blank"
      );
    }
    window.open(
      `https://wa.me/089663604258?text=${encodeURIComponent(stateWhatsapp)}`,
      "_blank"
    );
  };

  function Feature({ ...rest }) {
    const { title, desc } = rest;

    return (
      <Box
        p={3}
        shadow={rest["children"] ? "none" : "md"}
        borderWidth={rest["children"] ? "none" : "1px"}
        {...rest}
      >
        <Heading fontSize="4xl">{title}</Heading>
        <Text marginTop={"20px"} textAlign={"justify"}>
          {desc}
        </Text>
        {rest["children"] && (
          <>
            <div>{rest["children"]}</div>
          </>
        )}
      </Box>
    );
  }
  const handleChangeTextArea = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => setStateWhatsapp(e.target.value);

  return (
    <>
      <div style={{ textAlign: "left" }} className="lg:px-28 pb-9">
        <div>
          <HStack spacing={8} alignItems={"start"}>
            <div className="grid md:grid-cols-2   sm:grid-cols-1 grid-rows-1 gap-1 p-5">
              <Box>
                <div className="flex justify-center ">
                  <Feature style={{ boxShadow: "none" }}>
                    <div className="w-fit ">
                      <img src={ItsMe} style={{ borderRadius: 50 }} />
                    </div>
                  </Feature>
                </div>
              </Box>
              <Box>
                <div className="mt-8">
                  <Feature
                    style={{
                      borderRadius: "10px",
                    }}
                    className="m-4"
                    title="Muh Syahendra Anindyantoro"
                    desc="Hi, I'm Muh Syahendra Anindyantoro usually called hendra. I work as a Frontend Developer or Frontend Engineer. My daily life as a Frontend Developer is always in front of a laptop. Covering the design into HTML and integrating the required endpoints."
                  />
                </div>
                <div className="mt-5 px-4">
                  <Divider marginTop={5} />
                  <div className="mt-3 text-lg font-medium">
                    Address:{" "}
                    <span className="text-sm font-medium">
                      Jl Beo 1 Perum Barito 1 blok A5 Rt 2/X Gonilan Kartasura
                    </span>
                    <span>
                      <div>
                        {/* <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.1838434139495!2d110.76120467538342!3d-7.554923192458826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a145ec5110753%3A0x67321908c1550d55!2sPerum%20Barito%201!5e0!3m2!1sid!2sid!4v1684643947441!5m2!1sid!2sid"
                          height="450"
                          loading="lazy"
                        ></iframe> */}
                      </div>
                    </span>
                  </div>
                  <div className="mt-3 text-lg font-medium">
                    Email:{" "}
                    <span className="text-sm font-medium">
                      <a href="mailto:muhsyahendraa1722@gmail.com">
                        muhsyahendraa1722@gmail.com
                      </a>
                    </span>
                  </div>
                  <div className="mt-3 text-lg font-medium">
                    Skill:{" "}
                    <span className="text-sm font-medium">
                      ReactJS | NextJS | Nuxt | Vue
                    </span>
                  </div>
                  <div className="mt-3 text-lg font-medium">
                    CV:{" "}
                    <span className="text-sm font-medium">
                      <a href="">Download</a>
                    </span>
                  </div>
                </div>
              </Box>
            </div>
          </HStack>
          <div className="px-4">
            <hr />
            <div className="mt-3">
              <span className="mt-3">
                <div className="flex justify-around md:justify-center mt-5 ">
                  <div className="md:mr-5 mr-3">
                    <div>
                      <button
                        onClick={() => handleClick("github")}
                        className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded"
                      >
                        Github
                      </button>
                    </div>
                  </div>
                  <div className="md:mr-5 mr-3">
                    <div>
                      <button
                        onClick={() => handleClick("linkedin")}
                        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                      >
                        Linkedin
                      </button>
                    </div>
                  </div>
                  <div className="md:mr-5">
                    <div>
                      <button
                        onClick={() => handleClick("whatsapp")}
                        className="bg-transparent hover:bg-green-500 text-green-500 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
                      >
                        Whatsapp
                      </button>
                    </div>
                  </div>
                </div>
              </span>
            </div>
            {/* <iframe src="https://www.w3schools.com" title="linkedin"></iframe> */}
            {open && (
              <div className="mt-8">
                <div
                  className="flex justify-center font-bold text-2xl"
                  style={{ color: "#23D366" }}
                >
                  Whatsapp
                </div>
                <form className="bg-white px-8 pt-6 pb-8 mb-4">
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="username"
                    >
                      Pesan:
                    </label>
                    <textarea
                      className="shadow h-24 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      typeof="text"
                      placeholder="Username"
                      onChange={handleChangeTextArea}
                    />
                  </div>

                  <div className="flex items-center justify-center">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      typeof="button"
                      onClick={handleWhatsapp}
                      style={{ background: "#23D366" }}
                    >
                      Open Whatsapp
                    </button>
                  </div>
                </form>
              </div>
            )}
            {stateGithub.length > 0 &&
              stateGithub.map((item, index) => (
                <a href={item.svn_url} key={index}>
                  <div className="mt-5 p-5 border-2 rounded-md">
                    <div className="mt-3">
                      <span className="font-semibold">Name :</span> {item.name}
                    </div>
                    <div className="mt-3">
                      <span className="font-semibold">Description :</span>{" "}
                      {item.description}
                    </div>
                    <div
                      className={`${
                        item.language &&
                        item.language.toLowerCase().includes("javascript")
                          ? "bg-yellow-200  w-fit py-1 px-2 rounded-full text-sm mt-3"
                          : item.language &&
                            item.language.toLowerCase().includes("vue")
                          ? "bg-green-200 w-fit py-1 px-2 rounded-full text-sm mt-3"
                          : item.language &&
                            item.language.toLowerCase().includes("typescript")
                          ? "bg-blue-200 w-fit py-1 px-2 rounded-full text-sm mt-3"
                          : !item.language
                          ? ""
                          : "bg-gray-200 w-fit py-1 px-2 rounded-full text-sm mt-3"
                      }`}
                    >
                      {item.language}
                    </div>
                  </div>
                </a>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Me;
