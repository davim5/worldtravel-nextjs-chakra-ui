import { Flex, Heading } from '@chakra-ui/react';

export function ContinentBanner(){
    return (
        <Flex
            w="100%" 
            h="500px" 
            px="36"
            pt="72"
            bgImage="url(/images/banner_europe.png)" 
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            align="center"
            mb="80px"
            >
                <Heading
                fontWeight="semibold"
                color="light.white"
                fontSize="48px"
                textAlign="left"
                >
                    Europe
                </Heading>
            </Flex>
    );
}