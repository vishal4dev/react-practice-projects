import { Box,keyframes, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';//importing the carousel css
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';


//this creates a keyframe animation for the image component in the stack
//keyframes: Creates the keyframes for the up-and-down motion. At 0% and 100%, the image stays in its original position. At 50%, the image moves up by 20 pixels (translateY(-20px)).
// animation: Applies the animation to the Image component, making it move up and down with a duration of 2 seconds and looping infinitely.
const upDown = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(10px); }
  100% { transform: translateY(0); }
`;

//this creates a heading options object to be used in the carousel component
const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '85%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}//this makes the heading to be as wide as the text
          borderBottom={'2px solid'}
          m="auto"
        >
          Services
        </Heading>

        <Stack
          h="full"
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}//this makes the stack to be in a column on small screens and in a row on large screens this is how we are dealing with responsiveness on the go in chakra ui
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} animation={`${upDown} 1.5s ease-in-out infinite`}  />


          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'justify'}
          >
        Our video hosting service offers a robust platform for streaming high-quality videos. Whether you are a content creator, a business, or an educator, our service provides the tools you need to upload, manage, and share your videos seamlessly. 
        Enjoy features like adaptive streaming, secure video hosting, and detailed analytics to track your audience engagement. Join us and take your video content to the next level with our reliable and scalable video hosting solutions.

          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

//creating a carousel component to display images separtely from the return div;
const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
        Future is Gaming
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img3} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Gaming on Console
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img4} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Night life is cool
      </Heading>
    </Box>
  </Carousel>
);

export default Home;

//what is hue-rotate(-130deg) in the filter property of the image component?
//it is a css filter property that changes the hue of the image by 130 degrees
