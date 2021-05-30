import { Flex, Heading, SimpleGrid, Text, Box, Image, HStack } from "@chakra-ui/react";
import { ContinentBanner } from "../../components/ContinentBanner";
import { ContinentInfo } from "../../components/ContinentInfo";
import { Header } from "../../components/Header";


export default function Continent(){
    return (
        <Flex flexDir="column" justify="center" align="center">
            <Header/>
            
            <ContinentBanner/>

            <ContinentInfo/>
            
            <Flex
            flexDir="column"
            w="100%"
            maxWidth="1160px"
            mx="140px"
            alignItems="center"
            >
                <Heading fontWeight="normal" mb="50px">
                    Cidades +100
                </Heading>
                
                <HStack spacing="45px" minWidth="250px">
                    <Box border="1px solid rgba(255, 186, 8, 0.5)" width="256px" borderRadius="4px">
                        <Image src={'/images/londres.png'}/>
                        <Flex justifyContent="space-between" mx="24px" my="20px">
                            <Box>
                                <Heading lineHeight="25px" fontSize="20px">Londres</Heading>
                                <Text lineHeight="26px">Reino Unido</Text>
                            </Box>
                            <Image src={'/images/UK_flag.svg'}></Image>
                        </Flex>
                    </Box>
                    <Box border="1px solid rgba(255, 186, 8, 0.5)" borderRadius="4px">
                        <Image src={'/images/londres.png'}/>
                        <Flex justifyContent="space-between" mx="24px" my="20px">
                            <Box>
                                <Heading lineHeight="25px" fontSize="20px">Londres</Heading>
                                <Text lineHeight="26px">Reino Unido</Text>
                            </Box>
                            <Image src={'/images/UK_flag.svg'}></Image>
                        </Flex>
                    </Box>
                    <Box border="1px solid rgba(255, 186, 8, 0.5)" borderRadius="4px">
                        <Image src={'/images/londres.png'}/>
                        <Flex justifyContent="space-between" mx="24px" my="20px">
                            <Box>
                                <Heading lineHeight="25px" fontSize="20px">Londres</Heading>
                                <Text lineHeight="26px">Reino Unido</Text>
                            </Box>
                            <Image src={'/images/UK_flag.svg'}></Image>
                        </Flex>
                    </Box>
                    <Box border="1px solid rgba(255, 186, 8, 0.5)" borderRadius="4px">
                        <Image src={'/images/londres.png'}/>
                        <Flex justifyContent="space-between" mx="24px" my="20px">
                            <Box>
                                <Heading lineHeight="25px" fontSize="20px">Londres</Heading>
                                <Text lineHeight="26px">Reino Unido</Text>
                            </Box>
                            <Image src={'/images/UK_flag.svg'}></Image>
                        </Flex>
                    </Box>
                    <Box border="1px solid rgba(255, 186, 8, 0.5)" borderRadius="4px">
                        <Image src={'/images/londres.png'}/>
                        <Flex justifyContent="space-between" mx="24px" my="20px">
                            <Box>
                                <Heading lineHeight="25px" fontSize="20px">Londres</Heading>
                                <Text lineHeight="26px">Reino Unido</Text>
                            </Box>
                            <Image src={'/images/UK_flag.svg'}></Image>
                        </Flex>
                    </Box>
                    <Box border="1px solid rgba(255, 186, 8, 0.5)" borderRadius="4px">
                        <Image src={'/images/londres.png'}/>
                        <Flex justifyContent="space-between" mx="24px" my="20px">
                            <Box>
                                <Heading lineHeight="25px" fontSize="20px">Londres</Heading>
                                <Text lineHeight="26px">Reino Unido</Text>
                            </Box>
                            <Image src={'/images/UK_flag.svg'}></Image>
                        </Flex>
                    </Box>
                </HStack>
            </Flex>
        </Flex>

        
    );
}