import { Box, Flex, Image } from '@chakra-ui/react';

export function Header(){
    return(
        <Flex
            as="header"
            w="100%"
            maxW={1480}
            h="20"
            mx="auto"
            mt="4"
            px="6"
            align="center"
            justify="center"
        >
            <Box>
                <Image boxSize="52" src={'/images/Logo.svg'} alt="worltravel logos"/>
            </Box>
        </Flex>
    )
}