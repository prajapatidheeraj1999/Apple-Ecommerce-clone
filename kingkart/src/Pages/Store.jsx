import { Badge, Box, Center, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import Footer from '../Component/Footer'
import { IoIosCard, IoIosAlbums, IoIosFlower } from "react-icons/io";
import { FiFilm } from "react-icons/fi"
export default function Store() {
  return (
    <Box bg="#f5f5f7">

      <Center>
        <Text fontSize='5xl' as='b'>Store. The best way to buy the </Text>
      </Center>
      <Center>
        <Text fontSize='5xl' as='b'>products you love.</Text>
      </Center>

      <SimpleGrid columns={6} spacing='40px' w="80%" m="auto" mt="50px" mb={38}>
        <Box  >
          <Image src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-14-16-mac-nav-202301?wid=200&hei=130&fmt=png-alpha&.v=1670959891635" alt='desktop' boxSize='100px'></Image>
          <Text>Mac</Text>
        </Box>
        <Box >
          <Image src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-iphone-nav-202209_GEO_EMEA?wid=200&hei=130&fmt=png-alpha&.v=1661027786072" alt='desktop' boxSize='100px'></Image>
          <Text>Mac</Text>
        </Box>
        <Box >
          <Image src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-ipad-nav-202210?wid=200&hei=130&fmt=png-alpha&.v=1664912135437" alt='desktop' boxSize='100px'></Image>
          <Text>Mac</Text>
        </Box>
        <Box >
          <Image src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-watch-nav-202209_GEO_IN?wid=200&hei=130&fmt=png-alpha&.v=1661796454107" alt='desktop' boxSize='100px'></Image>
          <Text>Mac</Text>
        </Box>
        <Box >
          <Image src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-airpods-nav-202209?wid=200&hei=130&fmt=png-alpha&.v=1660676485885" alt='desktop' boxSize='100px'></Image>
          <Text>Mac</Text>
        </Box>
        <Box >
          <Image src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=200&hei=130&fmt=png-alpha&.v=1625783380000" alt='desktop' boxSize='100px'></Image>
          <Text>Mac</Text>
        </Box>

      </SimpleGrid>

      <Center><Text fontSize='xl' as="b">The latest. Take a look at what’s new right now.</Text></Center>

      {/* MACBOOK PRO 14” AND 16”
Mover. Maker. Boundary breaker.
From ₹199900.00‡ */}
      <SimpleGrid columns={4} spacing={10} w="80%" m="auto" mt={5} mb={10}>
        <Box bg='tomato' height='auto' borderRadius='lg'>
          <Image src='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-macbook-pro-202301?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1671578693545' borderRadius='lg'></Image>
          <Text mt="-300px" color="white">MACBOOK PRO 14” AND 16”</Text>
          {/* <Text mt="-200px" color="white">Mover. Maker. Boundary breaker.</Text> */}
        </Box>
        <Box bg='tomato' height='auto' borderRadius='lg'>
          <Image src='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-mac-mini-202301?wid=400&hei=500&fmt=jpeg&qlt=95&.v=1670448669900' borderRadius='lg'></Image>
          <Text mt="-300px" color="white">MACBOOK PRO 14” AND 16”</Text>
        </Box>
        <Box bg='tomato' height='auto' borderRadius='lg'>
          <Image src='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-iphone-14-202209?wid=400&hei=500&fmt=jpeg&qlt=95&.v=1661890731783' borderRadius='lg'></Image>
          <Text mt="-300px" color="balck">MACBOOK PRO 14” AND 16”</Text>
        </Box>
        <Box bg='tomato' height='auto' borderRadius='lg' >
          <Image src='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-homepod-202301?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1670389217441' borderRadius='lg'></Image>

        </Box>

      </SimpleGrid>
      <Text as="b" fontSize='xl' mb="40px">The Apple Store difference. Even more reasons to shop with us.</Text>
      <SimpleGrid columns={4} spacingX='40px' spacingY='20px' w="80%" m="auto">
        <Box bg='#ffffff' height='200px' borderRadius='lg' p={10} mb="40px">
          <IoIosCard color='green' size={30} />
          <Text>Flexible ways to pay.</Text>
          <Text color={"green"} as="b"> Plus instant savings§§ and No Cost EMI.§</Text>
        </Box>
        <Box bg='#ffffff' height='200px' borderRadius='lg' p={10}>
          <FiFilm color='#ae3dff' size={30} />
          <Text>Flexible ways to pay.</Text>
          <Text color={"#ae3dff"} as="b"> Plus instant savings§§ and No Cost EMI.§</Text>
        </Box>
        <Box bg='#ffffff' height='200px' borderRadius='lg' p={10}>
          <IoIosAlbums color='red' size={30} />
          <Text>Flexible ways to pay.</Text>
          <Text color={"red"} as="b"> Plus instant savings§§ and No Cost EMI.§</Text>
        </Box>
        <Box bg='#ffffff' height='200px' borderRadius='lg' p={10}>
          <IoIosFlower color='#268eff' size={30} />
          <Text>Flexible ways to pay.</Text>
          <Text color={"#268eff"} as="b"> Plus instant savings§§ and No Cost EMI.§</Text>
        </Box>

      </SimpleGrid>
      <Text as="b" fontSize='xl' mb="40px">Accessories. Essentials that pair perfectly with your favourite devices.</Text>

      <SimpleGrid columns={4} spacing={10} w="80%" m="auto" p={5} mb={10}>
        <Box bg='#ffffff' height='400px' borderRadius='lg'>
          <Center>
            <Image src='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQTJ3?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1673374526158'></Image>

          </Center>
          <Badge ml='1' fontSize='0.8em' colorScheme='red' mt={10}>
            New
          </Badge>
          <Text>45mm Black Unity Sport Loop</Text>
          <Text fontSize='sm' mt={5}>MRP ₹4500.00 (Incl. of all taxes)</Text>

        </Box>
        <Box bg='#ffffff' height='400px' borderRadius='lg'>
          <Center>
            <Image src='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQGX3ref?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1660858506731'></Image>

          </Center>
          <Badge ml='1' fontSize='0.8em' colorScheme='red' mt={10}>
            New
          </Badge>
          <Text>45mm Beige Braided Solo Loop - Size 6</Text>
          <Text fontSize='sm' mt={5}>MRP ₹9500.00 (Incl. of all taxes)</Text>

        </Box>
        <Box bg='#ffffff' height='400px' borderRadius='lg'>
          <Center>
            <Image src='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQDU3?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1664481896530'></Image>

          </Center>
          <Badge ml='1' fontSize='0.8em' colorScheme='red' mt={10}>
            New
          </Badge>
          <Text>Smart Folio for iPad (10th generation) - Sky</Text>
          <Text fontSize='sm' mt={5}>MRP ₹8500.00 (Incl. of all taxes)</Text>

        </Box>
        <Box bg='#ffffff' height='400px' borderRadius='lg'>
          <Center>
            <Image src='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPRY3?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1666123999266'></Image>

          </Center>
          <Badge ml='1' fontSize='0.8em' colorScheme='red' mt={10}>
            New
          </Badge>
          <Text>iPhone 14 Silicone Case with MagSafe - Lilac</Text>
          <Text fontSize='sm' mt={5}>MRP ₹4900.00 (Incl. of all taxes)</Text>

        </Box>
       
       

      </SimpleGrid>

      <Text as="b" fontSize='xl' mb="40px">Accessories. Essentials that pair perfectly with your favourite devices.</Text>

      <SimpleGrid columns={4} spacing={10} w="80%" m="auto" p={5} mb={10}>
        <Box bg='#ffffff' height='400px' borderRadius='lg'>
          <Center>
            <Image src='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1660803972361'></Image>

          </Center>
          <Badge ml='1' fontSize='0.8em' colorScheme='red' mt={10}>
            New
          </Badge>
          <Text>AirPods Pro (2nd generation)</Text>
          <Text fontSize='sm' mt={5}>MRP ₹26900.00 (Incl. of all taxes)</Text>

        </Box>
        <Box bg='#ffffff' height='400px' borderRadius='lg'>
          <Center>
            <Image src='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-silver-202011?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1604021221000'></Image>

          </Center>
          <Badge ml='1' fontSize='0.8em' colorScheme='red' mt={10}>
            New
          </Badge>
          <Text>AirPods Max - Silver</Text>
          <Text fontSize='sm' mt={5}>MRP ₹59900.00 (Incl. of all taxes)</Text>

        </Box>
        <Box bg='#ffffff' height='400px' borderRadius='lg'>
          <Center>
            <Image src='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/homepod-mini-select-yellow-202110?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1632925510000'></Image>

          </Center>
          <Badge ml='1' fontSize='0.8em' colorScheme='red' mt={10}>
            New
          </Badge>
          <Text>HomePod mini - Yellow</Text>
          <Text fontSize='sm' mt={5}>MRP ₹10900.00 (Incl. of all taxes)</Text>

        </Box>
        <Box bg='#ffffff' height='400px' borderRadius='lg'>
          <Center>
            <Image src='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/homepod-select-midnight-202210?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1670557210097'></Image>

          </Center>
          <Badge ml='1' fontSize='0.8em' colorScheme='red' mt={10}>
            New
          </Badge>
          <Text>HomePod - Midnight</Text>
          <Text fontSize='sm' mt={5}>MRP ₹32900.00 (Incl. of all taxes)</Text>

        </Box>
       
       

      </SimpleGrid>
      <Text></Text>
      <SimpleGrid columns={3} spacing={10} w="80%" m={"auto"}  >
       <Box bg='#ffffff'  borderRadius='lg'>
        <Text pb={-10}>Four Apple services. One easy subscription.</Text>
        <Image src='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-50-subscriptions-202108?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1626375547000' ></Image>
       </Box>
       <Box bg='#ffffff' height='300px' borderRadius='lg'>
       <Text pb={-10}>We've got you covered.</Text>
        <Image src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-applecare-202301?wid=389&hei=405&fmt=p-jpg&qlt=95&.v=1672770914413' ></Image>
       </Box>
       <Box bg='#ffffff' height='300px'  borderRadius='lg'>
       <Text pb={-10}>Discover all the way to use apple pay</Text>
        <Image src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-applepay-202209?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1661873199894' ></Image>
       </Box>
      </SimpleGrid>


      <Footer />
    </Box>

  )
}
