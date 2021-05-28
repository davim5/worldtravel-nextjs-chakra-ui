import { Header } from "../components/Header"
import { Box, Flex, Heading } from '@chakra-ui/react';
import { Banner } from "../components/Banner";
import { TravelTypes } from "../components/TravelTypes";
import { SwiperComponent } from "../components/SwiperComponent";


export default function Home() {

  return (
    <Flex
      flexDir="column"
      justify="center"
      alignItems="center"
    >
      <Header/>
      <Banner/>
      <TravelTypes/>

      <Box as="div" bg="dark.text" my="80px" w="90px" h="1px"/>  

      <Heading align="center" fontWeight={500} mb="50px">
      Vamos nessa? <br/> Então escolha seu continente
      </Heading>

      <SwiperComponent/>  
    </Flex>
  )
}
