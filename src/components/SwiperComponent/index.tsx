import { Flex, Heading, Text, Link} from '@chakra-ui/react';
import SwiperCore, { Pagination, Navigation, A11y } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SlideContent } from './SlideContent';


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
            <SlideContent
              bg_url='url(/images/europe.png)'
              title='Europe'
              description='O continente mais antigo'
              link='/continent/europe'
            />
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </Flex>   
    );
}