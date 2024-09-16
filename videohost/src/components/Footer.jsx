import {
    Box,
    Button,
    Heading,
    HStack,
    Input,
    Stack,
    Text,
    VStack,
  } from '@chakra-ui/react';
  import React from 'react';
  import { AiOutlineSend } from 'react-icons/ai';
  
  const Footer = () => {
    return (
      <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color={'white'}>
        <Stack direction={['column', 'row']}>
          <VStack alignItems={'stretch'} w={'full'} px={'4'}>
            <Heading
              size="md"
              textTransform={'uppercase'}
              textAlign={['center', 'left']}
            >
              Subscribe to get updates
            </Heading>
            <HStack borderBottom={'2px solid #EE82EE '} py="2">
              <Input
                placeholder="Enter Email Here..."
                border="2px solid"
                borderRadius="20px 20px 20px 20px"  
                _hover={{ borderColor: '#EE82EE' }} 
                _focus={{ borderColor: '#EE82EE', boxShadow: 'outline' }} 
              />
              <Button
                p={'0'}
                colorScheme={'#EE82EE'}
                variant={'ghost'}
                borderRadius={'0 20px 20px 0'}
              >
                <AiOutlineSend size={20} />
              </Button>
            </HStack>
          </VStack>
  
          <VStack
            w={'full'}
            borderLeft={['none', '1px solid #EE82EE']}
            borderRight={['none', '1px solid #EE82EE']}
          >
            <Heading textTransform={'uppercase'} textAlign={'center'}>
              VIDEO HUB
            </Heading>
            <Text>All rights received</Text>
          </VStack>
  
          <VStack w={'full'}>
            <Heading size={'md'} textTransform={'uppercase'}>
              Social Media
            </Heading>
            <Button variant={'link'} colorScheme={'purple'}>
              <a target={'black'} href="https://youtube.com">
                Youtube
              </a>
            </Button>
            <Button variant={'link'} colorScheme={'purple'}>
              <a target={'black'} href="https://instagram.com">
                Instagram
              </a>
            </Button>
  
            <Button variant={'link'} colorScheme={'purple'}>
              <a target={'black'} href="https://github.com">
                Github
              </a>
            </Button>
          </VStack>
        </Stack>
      </Box>
    );
  };
  
  export default Footer;