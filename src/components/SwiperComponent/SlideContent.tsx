import {Flex,Text,Link,Heading} from '@chakra-ui/react';

interface SliderContentProps {
  bg_url:string;
  title:string;
  description:string;
  link: string;
}

export function SlideContent({bg_url,title,description, link}:SliderContentProps){
    return(
            <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage={bg_url}
            bgSize="cover"
            textAlign="center"
            bgPosition="center"
            >
              <Link href={link}>
                <a>
                  <Heading
                  color="light.white"
                  fontWeight="bold"
                  fontSize="48px"
                  lineHeight="72px"
                  >
                    {title}
                  </Heading>
                  <Text
                  color="light.white"
                  fontWeight="bold"
                  fontSize="24px"
                  lineHeight="36px"
                  >{description}</Text>
                </a>
              </Link> 
            </Flex>
    );
}