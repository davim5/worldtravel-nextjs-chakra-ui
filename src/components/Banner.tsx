import { Box, Image } from '@chakra-ui/react';

export function Banner(){
    return(
        <Box w="100%" mb="80px">
        <Image w="100%" src={'/images/banner.png'} alt="banner"/>
      </Box>
    );
}