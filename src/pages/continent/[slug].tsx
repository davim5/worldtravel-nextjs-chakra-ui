import { Flex, Heading, SimpleGrid, Text, Box, Image, HStack } from "@chakra-ui/react";
import { ContinentBanner } from "../../components/ContinentBanner";
import { Header } from "../../components/Header";


export default function Continent(){
    return (
        <Flex flexDir="column" justify="center" align="center">
            <Header/>
            <ContinentBanner/>

            <SimpleGrid mx="140" columns={2} mb="60px">
                <Text
                fontSize="24px"
                
                >
                A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
                </Text>
                <SimpleGrid
                maxWidth="490px" columns={3} alignItems="center" justifyContent="center"
                >
                    <Box textAlign="center">
                        <Text
                        color="highlight"
                        fontWeight="700"
                        fontSize="48px"
                        >
                            50
                        </Text>
                        <Text
                        fontWeight="700"
                        fontSize="24px"
                        >
                            países
                        </Text>
                    </Box>
                    <Box textAlign="center">
                        <Text
                        color="highlight"
                        fontWeight="700"
                        fontSize="48px"
                        >
                            60
                        </Text>
                        <Text
                        fontWeight="700"
                        fontSize="24px"
                        >
                            línguas
                        </Text>
                    </Box>
                    <Box textAlign="center">
                        <Text
                        color="highlight"
                        fontWeight="700"
                        fontSize="48px"
                        >
                            27
                        </Text>
                        <Text
                        fontWeight="700"
                        fontSize="24px"
                        >
                            cidades 100+
                        </Text>
                    </Box>
                
                </SimpleGrid>
            </SimpleGrid>
            
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