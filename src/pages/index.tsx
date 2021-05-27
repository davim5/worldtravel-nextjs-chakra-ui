import { Header } from "../components/Header"
import { Box, Center, Divider, Flex, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";


SwiperCore.use([Pagination,Navigation]);


export default function Home() {
  return (
    <Flex
      flexDir="column"
      justify="center"
      alignItems="center"
    >
      <Header/>
      <Box
      w="100%"
      >
        <Image w="100%" src={'/images/banner.png'} alt="banner"/>
      </Box>
      <HStack spacing="150px" align="stretch" >
        <Flex flexDir="column" alignItems="center" justifyContent="center">
          <Image width="s" src='/images/cocktail.svg'/>
          <Text mt="24px" fontSize="24px" fontWeight={600}>vida noturna</Text> 
        </Flex>
        <Flex flexDir="column" alignItems="center" justifyContent="center">
          <Image width="s" src='/images/cocktail.svg'/>
          <Text mt="24px" fontSize="24px" fontWeight={600}>vida noturna</Text> 
        </Flex>
        <Flex flexDir="column" alignItems="center" justifyContent="center">
          <Image width="s" src='/images/cocktail.svg'/>
          <Text mt="24px" fontSize="24px" fontWeight={600}>vida noturna</Text> 
        </Flex>
        <Flex flexDir="column" alignItems="center" justifyContent="center">
          <Image width="s" src='/images/cocktail.svg'/>
          <Text mt="24px" fontSize="24px" fontWeight={600}>vida noturna</Text> 
        </Flex>
        <Flex flexDir="column" alignItems="center" justifyContent="center">
          <Image width="s" src='/images/cocktail.svg'/>
          <Text mt="24px" fontSize="24px" fontWeight={600}>vida noturna</Text> 
        </Flex>
      </HStack>

      
      <Box as="div" bg="dark.text" my="80px" w="90px" h="1px"/>
      
      <Heading align="center" fontWeight={500}>
      Vamos nessa? <br/>
      Então escolha seu continente
      </Heading>


      <Flex py="40px" px="100px" h="450px" w="100%" justify="center">
        <Swiper 
        pagination={{"renderBullet": function (index, className) {
          return '<span class=\"' + className + '\">' + '</span>';
        }}}
        navigation
        className="mySwiper"
        >
          <SwiperSlide>
            <Image src="/images/europe.png" maxW="100%" h="auto"></Image>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </Flex>

    </Flex>
  )
}
