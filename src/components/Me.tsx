import { HStack, Box, Heading, Text, Divider } from "@chakra-ui/react";
import ItsMe from "../assets/me.jpeg";
import type { Github } from "../modules/github";
import { useState } from "react";

function Me() {
  const [stateGithub, setStateGithub] = useState<Github>([]);
  // const [stateLinkedin, setStateLinkedin] = useState<string>("");
  const [stateWhatsapp, setStateWhatsapp] = useState<string>("");

  const handleClick = async (e): Promise<void> => {
    switch (e) {
      case "github":
        try {
          const res = await fetch(
            "https://api.github.com/users/hendras1722/repos"
          );
          const data = (await res.json()) as Github;
          setStateGithub(data);
        } catch (error) {
          console.error(error.message);
        }
        break;
      case "linkedin":
        setStateGithub([]);
        // setStateLinkedin("https://www.linkedin.com/in/muhsyahendraa/");
        break;

      default:
        break;
    }
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
        <Text marginTop={"20px"}>{desc}</Text>
        {rest["children"] && (
          <>
            <div>{rest["children"]}</div>
          </>
        )}
      </Box>
    );
  }
  return (
    <>
      <div style={{ textAlign: "left" }} className="lg:px-28">
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
                    desc="Hi, Saya Muh Syahendra Anindyantoro biasa dipanggil hendra. Profesi sebagai Frontend Developer atau Frontend Engineer. Kehidupan saya sehari hari sebagai Frontend Developer selalu didepan laptop. Mencovert design menjadi sebuah HTML dan mengintegrasi endpoint yang dibutuhkan."
                  />
                </div>
                <div className="mt-8 px-4">
                  <Divider marginTop={10} />
                  <div className="mt-3 text-lg font-medium">
                    Alamat:{" "}
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
                  <div className="mt-3">
                    <div className="text-lg font-medium">Me:</div>
                    <span className="mt-3">
                      <div className="flex justify-around md:justify-start mt-5 ">
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
                </div>
              </Box>
            </div>
          </HStack>
          <div className="px-4">
            <hr />
            {/* <iframe src="https://www.w3schools.com" title="linkedin"></iframe> */}
            Whatsapp
            <div>
              <form class="bg-white px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="username"
                  >
                    text
                  </label>
                  {/* whatsapp://send?abid=username&text=Hello%2C%20World! */}
                  {stateWhatsapp}
                  <textarea
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setStateWhatsapp(e.target.value)}
                  />
                </div>
                <div class="mb-6">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="username"
                  >
                    Username
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Username"
                  />
                </div>
                <div class="flex items-center justify-between">
                  <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
            {stateGithub.length > 0 &&
              stateGithub.map((item, index) => (
                <div className="mt-5 p-5 border-2 rounded-md" key={index}>
                  <div>{item.name}</div>
                  <div>{item.description}</div>
                  <div
                    className={`${
                      item.language &&
                      item.language.toLowerCase() === "javascript"
                        ? "bg-yellow-200  w-fit py-1 px-2 rounded-full bg-yellow-200 text-sm"
                        : item.language && item.language.toLowerCase() === "vue"
                        ? "bg-green-200 w-fit py-1 px-2 rounded-full bg-yellow-200 text-sm"
                        : item.language &&
                          item.language.toLowerCase() === "typescript"
                        ? "bg-blue-200 w-fit py-1 px-2 rounded-full bg-yellow-200 text-sm"
                        : !item.language
                        ? ""
                        : "bg-gray-200 w-fit py-1 px-2 rounded-full bg-yellow-200 text-sm"
                    }`}
                  >
                    {item.language}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Me;
