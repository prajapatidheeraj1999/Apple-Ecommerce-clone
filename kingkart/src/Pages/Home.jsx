import { Box, Button, Center, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Footer from '../Component/Footer'
import frist from "../images/image 1.png"
import second from "../images/image 2.png"
import third from "../images/image 3.png"
import fourth from "../images/image 4.png"
import five from "../images/image 5.png"
import six from "../images/image 6.png"
import CaptionCarousel from "./HomepageCoregel"

function Home() {
  return (

    <>
      <Box bg="#000000" color="white" pt={40}>
        <Center>
          <Text fontSize='5xl'>Introducing the new </Text>
        </Center>
        <Text fontSize='5xl'>MacBook Pro and Mac mini.</Text>
        <Button colorScheme='teal' variant='outline' mt={5} mb={20}>
          Watch the announcement
        </Button>
        <Image src={frist} alt='frist'></Image>
      </Box>
      <Box mt={3}>
        <Center>
          <Image src={second} alt='Second'></Image>
        </Center>
      </Box>
      <Box mt={3}>
        <Center>
          <Image src={third} alt='Second'></Image>
        </Center>
      </Box>
      <Box mt={3}>
        <Center>
          <Image src={fourth} alt='Second'></Image>
        </Center>
      </Box>
      <Box mt={3}>
        <Center>
          <Image src={five} alt='Second'></Image>
        </Center>
      </Box>
      <Box mt={3} mb={3}>
        <Center>
          <Image src={six} alt='Second'></Image>
        </Center>
      </Box>
      <CaptionCarousel/>

      <Footer />
    </>



  )
}

export default Home