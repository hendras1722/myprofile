import { HStack, Box, Heading, Text, Divider } from "@chakra-ui/react";
import ItsMe from "../assets/me.jpeg";

function Me() {
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
      <div style={{ textAlign: "left" }}>
        <div>
          <HStack spacing={8} alignItems={"start"}>
            <div className="grid md:grid-cols-2  sm:grid-cols-1 grid-rows-1 gap-4 p-5">
              <Box>
                <Feature style={{ boxShadow: "none" }}>
                  <img src={ItsMe} style={{ borderRadius: 50 }} />
                </Feature>
              </Box>
              <Box>
                <Feature
                  style={{
                    marginTop: "40px",
                    borderRadius: "10px",
                  }}
                  title="Muh Syahendra Anindyantoro"
                  desc="Hi, Saya Muh Syahendra Anindyantoro biasa dipanggil hendra. Profesi sebagai Frontend Developer atau Frontend Engineer. Kehidupan saya sehari hari sebagai Frontend Developer selalu didepan laptop. Mencovert design menjadi sebuah HTML dan mengintegrasi endpoint yang dibutuhkan."
                />
                <Divider marginTop={10} />
                <div style={{ marginTop: 10 }}>
                  <div>
                    Alamat:{" "}
                    <span>
                      Jl Beo 1 Perum Barito 1 blok A5 Rt 2/X Gonilan Kartasura
                    </span>
                    <span>
                      <div>
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.1838434139495!2d110.76120467538342!3d-7.554923192458826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a145ec5110753%3A0x67321908c1550d55!2sPerum%20Barito%201!5e0!3m2!1sid!2sid!4v1684643947441!5m2!1sid!2sid"
                          width="550"
                          height="450"
                          loading="lazy"
                        ></iframe>
                      </div>
                    </span>
                  </div>
                  <div className="mt-3">
                    Contact
                    <span className="mt-3">
                      <div className="flex ">
                        <div className="flex-1">
                          <div>Github</div>
                        </div>
                        <div className="flex-1">
                          <div>Linkedin</div>
                        </div>
                        <div className="flex-1">
                          <div>Whatsapp</div>
                        </div>
                      </div>
                    </span>
                  </div>
                </div>
              </Box>
            </div>
          </HStack>
        </div>
      </div>
    </>
  );
}

export default Me;
