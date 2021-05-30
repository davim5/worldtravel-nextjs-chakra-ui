import { SimpleGrid, Text, Box } from '@chakra-ui/react';

export function ContinentInfo(){
    return(
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
    );
}