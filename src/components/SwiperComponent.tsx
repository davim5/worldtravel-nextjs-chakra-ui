import { Flex, Heading, Text, Link} from '@chakra-ui/react';
import SwiperCore, { Pagination, Navigation, A11y } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';


SwiperCore.use([ Pagination, Navigation, A11y]);

export function SwiperComponent(){
    return(
        <Flex
        w="100%"
        h="450px"
        maxW="1240px"
        mx="auto"
        mb="10"
      >
        <Swiper 
         slidesPerView={1}
         navigation
         pagination={{clickable:true}}
         style={{width:'100%',flex:'1'}}
         >
          <SwiperSlide>
            <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage='url(/images/europe.png)'
            bgSize="cover"
            textAlign="center"
            bgPosition="center"
            >
              <Link href="/continent/europe">
                <a>
                  <Heading
                  color="light.white"
                  fontWeight="bold"
                  fontSize="48px"
                  lineHeight="72px"
                  >
                    Europa
                  </Heading>
                  <Text
                  color="light.white"
                  fontWeight="bold"
                  fontSize="24px"
                  lineHeight="36px"
                  >O continente mais antigo</Text>
                </a>
              </Link> 
            {/* <Image src="/images/europe.png" maxW="100%" h="auto"></Image> */}
            </Flex>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </Flex>   
    );
}