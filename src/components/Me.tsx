import { HStack, Box, Heading, Text, Divider } from "@chakra-ui/react";
import ItsMe from "../assets/me.jpeg";
import { Github } from "../modules/github.ts";
import { useState } from "react";

function Me() {
  const [stateGithub, setStateGithub] = useState<Github[]>([]);
  // const [stateLinkedin, setStateLinkedin] = useState<string>("");
  const [stateWhatsapp, setStateWhatsapp] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const workExperience = [
    {
      position: "Frontend Engineer",
      placeAndDate: "PrivyID · Purnawaktu",
      date: "Jul 2021 - Saat ini · 1 thn 11 bln",
      place: "Daerah Istimewa Yogyakarta, Indonesia",
    },
    {
      position: "Frontend Developer",
      placeAndDate: "PT. NashTa Global Utama · Kontrak",
      date: "Jul 2020 - Jun 2021 · 1 thnJul",
      place: "Depok, Jawa Barat, Indonesia",
    },
    {
      position: "Trainner Arduino",
      placeAndDate: "BLPT Yogyakarta",
      date: "Apr 2019 · 1 bln",
      place: "Daerah Istimewa Yogyakarta, Indonesia",
    },
    {
      position: "Technical Support Engineer",
      placeAndDate: "PT. Binter Jet Indonesia",
      date: "Feb 2019 - Mar 2019 · 2 bln",
      place: "Provinsi Jawa Tengah, Indonesia",
    },
  ];

  const project = [
    {
      name: "CIMB CCPL",
      date: "Jul 2021 - Sekarang",
    },
    {
      name: "CEISA 4.0",
      date: "Jul 2020 - Jun 2021",
    },
    {
      name: "Alat Monitoring Suhu di Panel Gardu Induk",
      date: "Jun 2019 - Jun 2019",
    },
  ];

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
          top: 500,
        });
        setStateGithub([]);
        setOpen(true);
        break;
      case "clear":
        setStateGithub([]);
        setOpen(false);
        break;

      default:
        break;
    }
  };

  const handleWhatsapp = () => {
    if (detectMob()) {
      return window.open(
        `whatsapp://send?phone=6289663604258&text=${encodeURIComponent(
          stateWhatsapp
        )}`,
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
        background={rest["children"] ? "" : "white"}
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
                <div className="mt-5 px-4  hidden lg:block">
                  <Divider marginTop={5} />
                  <div className="mt-5 font-bold text-lg mb-5">
                    Contact Person
                  </div>
                  <Box
                    padding={3}
                    shadow={"md"}
                    borderWidth={"1px"}
                    borderRadius={10}
                    marginTop={3}
                    background={"white"}
                  >
                    <div className="mt-3 text-lg font-medium">
                      Address:{" "}
                      <span className="text-sm font-medium">
                        Jl Beo 1 Perum Barito 1 blok A5 Rt 2/X Gonilan Kartasura
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
                        ReactJS | NextJS | Nuxt | Vue | Javascript | React
                        Native
                      </span>
                    </div>
                    <div className="mt-3 text-lg font-medium">
                      CV:{" "}
                      <span className="text-sm font-medium">
                        <a href="">Download</a>
                      </span>
                    </div>
                  </Box>
                </div>
                <div className="mt-3">
                  <span className="mt-3">
                    <div className="flex lg:justify-start justify-center md:justify-center mt-5 ">
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
              </Box>
            </div>
          </HStack>
          <div className="px-4">
            <div className="md:mr-5 flex items-center justify-center mb-3  ">
              <div className="w-full">
                {(stateGithub.length > 0 || open) && (
                  <button
                    onClick={() => handleClick("clear")}
                    className="bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded w-full"
                  >
                    Close
                  </button>
                )}
              </div>
            </div>

            {(stateGithub.length > 0 || open) && <hr />}
            {stateGithub.length > 0 && (
              <div className="mt-3">
                <a href="https://github.com/hendras1722">
                  <small>Visit my profile</small>
                </a>
              </div>
            )}
            {open && (
              <div className="mt-8">
                <Box
                  padding={3}
                  shadow={"md"}
                  borderWidth={"1px"}
                  borderRadius={10}
                  marginTop={3}
                  background={"white"}
                >
                  <div
                    className="flex justify-center font-bold text-2xl mt-3"
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
                </Box>
              </div>
            )}

            {stateGithub.length > 0 &&
              stateGithub.map((item, index) => (
                <>
                  <Box
                    padding={3}
                    shadow={"md"}
                    borderWidth={"1px"}
                    borderRadius={10}
                    marginTop={3}
                    background={"white"}
                    key={index}
                  >
                    <a href={item.svn_url}>
                      <div>
                        <div className="mt-3">
                          <span className="font-semibold">Name :</span>{" "}
                          {item.name}
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
                                item.language
                                  .toLowerCase()
                                  .includes("typescript")
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
                  </Box>
                </>
              ))}
          </div>
          <div className="mt-5 px-4 block md:block lg:hidden ">
            <Divider marginTop={5} />
            <div className="mt-5 font-bold text-lg mb-5">Contact Person</div>
            <Box
              padding={3}
              shadow={"md"}
              borderWidth={"1px"}
              borderRadius={10}
              marginTop={3}
              background={"white"}
            >
              <div className="mt-3 text-lg font-medium">
                Address:{" "}
                <span className="text-sm font-medium">
                  Jl Beo 1 Perum Barito 1 blok A5 Rt 2/X Gonilan Kartasura
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
              <div className="mt-3 text-lg font-medium mb-5 ">
                CV:{" "}
                <span className="text-sm font-medium">
                  <a href="">Download</a>
                </span>
              </div>
            </Box>
          </div>
          <div className="mb-5 px-4">
            <Divider marginTop={5} />
            <div className="mt-5 font-bold text-lg mb-5">Experience</div>
            <div>
              {workExperience.map((item, index) => (
                <div key={index}>
                  <Box
                    padding={3}
                    shadow={"md"}
                    borderWidth={"1px"}
                    borderRadius={10}
                    marginTop={3}
                    background={"white"}
                  >
                    <div className="font-bold">{item.position}</div>
                    <div>{item.placeAndDate}</div>
                    <div className="text-neutral-600 font-medium">
                      <small>{item.date}</small>
                    </div>
                    <div className="text-neutral-600 font-medium">
                      <small>{item.place}</small>
                    </div>
                  </Box>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-5 px-4">
            <Divider marginTop={5} />
            <div className="mt-5 font-bold text-lg mb-5">Project</div>
            <div>
              {project.map((item, index) => (
                <div key={index}>
                  <Box
                    padding={3}
                    shadow={"md"}
                    borderWidth={"1px"}
                    borderRadius={10}
                    marginTop={3}
                    background={"white"}
                  >
                    <div className="font-bold">{item.name}</div>
                    <div>{item.date}</div>
                  </Box>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Me;
