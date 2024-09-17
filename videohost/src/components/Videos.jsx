import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import vid from '../assets/videoplayback.mp4';

const Videos = () => {
  const videosArr = [
    vid
  ];

  const [videoSrc, setVideoSrc] = useState(videosArr[0]);

  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'}>
        <video
          controls
          controlsList="nodownload"
          src={videoSrc}
          style={{
            width: '50%',
            maxWidth: '100%',  // Prevents overflow from container
            height: 'auto',    // Maintains the aspect ratio
            display: 'block',  // Ensures no extra space around the video
            margin: '0 auto',  // Centers the video horizontally
          }}
        ></video>

        <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
          <Heading>Sample Video 1</Heading>
          <Text>
            This is a sample video for testing and demo. This is called
            description.
          </Text>
        </VStack>
      </VStack>
      <VStack
        w={['full', 'xl']}
        alignItems={'stretch'}//this makes the children stretch to the full width of the container
        p="8"
        spacing={'8'}
        overflowY={'auto'}//this creates a scrollbar when the content overflows the container
      >
        {videosArr.map((item, index) => (
          <Button
            variant={'ghost'}
            colorScheme={'purple'}
            onClick={() => setVideoSrc(item)}
          >
            Lecture {index + 1}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};

export default Videos;

//In HTML, "controls" refers to an attribute that you can add to media elements like <audio> and <video>. When you include the controls attribute, the browser provides built-in user interface controls, such as play, pause, volume, and skip buttons, so users can interact with the media.