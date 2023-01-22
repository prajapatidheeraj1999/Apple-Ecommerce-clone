import { Box, Button, Center, Divider, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import frist from "../images/image 1.png"
import second from "../images/image 2.png"
import Footer from '../Component/Footer'
import seven from "../images/image7.png"
import eight from '../images/image-8.png'
import nine from '../images/image-9.png'
import ten from '../images/image-10.png'
import eleven from '../images/image-11.png'
import tewel from '../images/image12.png'
import thirteen from '../images/image-13.png'
import fourteen from '../images/image14.png'
import fifteen from '../images/image-15.png'
import sixteen from '../images/image-16.png'
import seveteen from '../images/image-16.png'
function Mac() {
  return (
    <Box>
      <Box bg="#000000" color="white" pt={40}>
        <Center>
          <Text fontSize='5xl'>Introducing the new </Text>
        </Center>
        <Text fontSize='5xl'>MacBook Pro and Mac mini.</Text>
        <Button colorScheme='teal' variant='outline' mt={5} mb={20}>
          Watch the announcement
        </Button>

      </Box>
      <Box mt={3}>
        <Center>
          <Image src={frist} alt='frist'></Image>
        </Center>
      </Box>
      <Box mt={3}>
        <Center>
          <Image src={second} alt='Second'></Image>
        </Center>
      </Box>
      <Box>
        <Center mt={10} mb={10}>
          <Image src={seven}></Image>
        </Center>

      </Box>

      <Text fontSize='4xl' as="b" mt="15px">Which Mac is right for you?</Text>
      <SimpleGrid columns={4} spacing={10} w="80%" m={"auto"} mt={10}>
        <Box  >
          <Image src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1664472289661'></Image>
          <Text fontSize={"3xl"}>MacBook Air</Text>
          <Text>M1 chip</Text>
          <Text fontSize='xs' mt={4}>From $999</Text>
          <Button size='xs' color="white" bg={"blue"} mt={4}>Buy</Button>
          <Text color={"blue"} fontSize="xs" mt={3} mb={2}>Learn More</Text>

          <Divider />

        </Box>
        <Box  >
          <Image src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1653084303665'></Image>
          <Text fontSize={"3xl"}>MacBook Air</Text>
          <Text>M2 chip</Text>
          <Text fontSize='xs' mt={4}> From $1199</Text>
          <Button size='xs' color="white" bg={"blue"} mt={4}>Buy</Button>
          <Text color={"blue"} fontSize="xs" mt={3} mb={2}>Learn More</Text>
          <Divider />

        </Box>
        <Box  >
          <Image src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1664472289661'></Image>
          <Text fontSize={"3xl"}>MacBook Pro 13”</Text>
          <Text>M2 Advance chip</Text>
          <Text fontSize='xs' mt={4}>From $1299</Text>
          <Button size='xs' color="white" bg={"blue"} mt={4}>Buy</Button>
          <Text color={"blue"} fontSize="xs" mt={3} mb={2}>Learn More</Text>
          <Divider />

        </Box>
        <Box  >
          <Image src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202301?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1671304673229'></Image>
          <Text fontSize={"3xl"}>MacBook Pro
14” ad 16”</Text>
          <Text fontSize='xs' mt={4}>From $1999</Text>
          <Button size='xs' color="white" bg={"blue"} mt={4}>Order Now</Button>
          <Text color={"blue"} fontSize="xs" mt={3} mb={2}>Learn More</Text>
          <Divider />
          

        </Box>
        
        
      </SimpleGrid>

      <Image src={eight} w="80%" m={"auto"} mt={5}></Image>
      <Image src={nine} w="80%" m={"auto"} mt={5}></Image>
      <Image src={ten} w="80%" m={"auto"} mt={5}></Image>
      <Image src={eleven} w="80%" m={"auto"} mt={5}></Image>
      <Image src={tewel} w="80%" m={"auto"} mt={5}></Image>
      <Image src={thirteen} w="80%" m={"auto"} mt={5}></Image>
      <Image src={fourteen} w="80%" m={"auto"} mt={5}></Image>
      <Image src={fifteen} w="80%" m={"auto"} mt={5}></Image>
      <Image src={sixteen} w="80%" m={"auto"} mt={5}></Image>
      <Image src={seveteen} w="80%" m={"auto"} mt={5}></Image>

      <Footer />
    </Box>
  )
}

export default Mac