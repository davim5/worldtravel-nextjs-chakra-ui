import { HStack, Flex, Image, Text} from '@chakra-ui/react';
import { Type } from './Type';


export function TravelTypes(){
    return(
        <HStack spacing="150px" align="stretch" >
          <Type name="vida noturna" icon_url="/images/cocktail.svg"/>
          <Type name="praia" icon_url="/images/surf.svg"/>
          <Type name="moderno" icon_url="/images/building.svg"/>
          <Type name="clássico" icon_url="/images/museum.svg"/>
          <Type name="e mais..." icon_url="/images/world.svg"/>
        </HStack>
    );
}