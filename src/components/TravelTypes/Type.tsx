import { Flex, Image, Text} from '@chakra-ui/react';

interface TypeProps {
    name:string;
    icon_url: string;
}

export function Type({name, icon_url}:TypeProps){
    return (
        <Flex flexDir="column" alignItems="center" justifyContent="center">
          <Image width="s" src={icon_url}/>
          <Text mt="24px" fontSize="24px" fontWeight={600}>{name}</Text> 
        </Flex>
    );
}