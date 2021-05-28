import { HStack, Flex, Image, Text} from '@chakra-ui/react';


export function TravelTypes(){
    return(
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
    );
}