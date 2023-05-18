import { useNavigate } from "react-router-dom";
import {
  SimpleGrid,
  HStack,
  Box,
  Heading,
  Text,
  Divider,
} from "@chakra-ui/react";
import ItsMe from "../assets/me.jpeg";

function Me() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/about");
  };
  function Feature({ title, desc, ...rest }) {
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
            <SimpleGrid columns={2} minChildWidth="220px" spacing="10px">
              <Box>
                <Feature style={{ boxShadow: "none" }}>
                  <img src={ItsMe} style={{ borderRadius: 50 }} />
                </Feature>
              </Box>
              <Box
                width={{
                  base: "100%",
                  sm: "80%",
                  md: "100%",
                  lg: "160%",
                  "2xl": "200%",
                }}
              >
                <Feature
                  style={{
                    marginTop: "40px",
                    borderRadius: "10px",
                  }}
                  w={[390, 242, 800, 980]}
                  title="Muh Syahendra Anindyantoro"
                  desc="Hi, Saya Muh Syahendra Anindyantoro biasa dipanggil hendra. Profesi sebagai Frontend Developer atau Frontend Engineer. Kehidupan saya sehari hari sebagai Frontend Developer selalu didepan laptop. Mencovert design menjadi sebuah HTML dan mengintegrasi endpoint yang dibutuhkan."
                />
                <Divider marginTop={10} w={[390, 242, 800, 980]} />
                <div style={{ marginTop: 10 }}>
                  <div>
                    Alamat: <span>Jl Beo 1 Perum Barito 1 blok A5</span>
                  </div>
                </div>
              </Box>
            </SimpleGrid>
          </HStack>
        </div>
      </div>
    </>
  );
}

export default Me;
