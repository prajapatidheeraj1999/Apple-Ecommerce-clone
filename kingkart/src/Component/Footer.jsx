import { Box, Divider, Flex, Grid, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function Footer() {
  return (
    <>
    <Text>*Data plan is required. 5G is available in selected markets and through selected carriers. Speeds vary based on site conditions and carrier. For details on 5G support, contact your carrier and see apple.com/in/iphone/cellular.</Text>
    <Divider/>

      <SimpleGrid columns={5} spacing={10} w="60%" m="auto">
        <VStack>
          <Text as="b">Shop and Learn</Text>
          <Text>Store</Text>
          <Text>Mac</Text>
          <Text>iPad</Text>
          <Text>iPhone</Text>
          <Text>Watch</Text>
          <Text>AirPods</Text>
          <Text>TV & Home</Text>
          <Text>AirTag</Text>
          <Text>Accessories</Text>
          <Text>Gift Cards</Text>
        </VStack>
        <VStack>
          <Text as="b">Services</Text>
          <Text>Apple Music</Text>
          <Text>Apple TV+</Text>
          <Text>Apple Arcade</Text>
          <Text>iCloud</Text>
          <Text>Apple One</Text>
          <Text>Apple Books</Text>
          <Text>Apple Podcasts</Text>
          <Text>App Store</Text>
          <Text as="b" mt="30px">Account</Text>
          <Text>Manage Your Apple ID</Text>
          <Text>Apple Store Account</Text>
          <Text>iCloud.com</Text>

        </VStack>
        <VStack>
          <Text as="b">Apple Store</Text>
          <Text>Ways to Buy</Text>
          <Text>Apple Trade In</Text>
          <Text>Recycling Programme</Text>
          <Text>Recycling Programme</Text>
          <Text>Order Status</Text>
          <Text>Shopping Help</Text>

        </VStack>
        <VStack>
          <Text as="b">For Business</Text>
          <Text>Apple and Business</Text>
          <Text>For Education</Text>
          <Text>Apple and Education</Text>
          <Text>Shop for Education</Text>
          <Text>Shop for University</Text>
          <Text>For Healthcare</Text>
          <Text as="b">Apple in Healthcare</Text>
          <Text>Health on Apple Watch</Text>
        </VStack>
        <VStack>
          <Text as="b">Apple Values</Text>
          <Text>Accessibility</Text>
          <Text>Education</Text>
          <Text>Environment</Text>
          <Text>Privacy</Text>
          <Text>Supplier Responsibility</Text>
          <Text as="b">About Apple</Text>
          <Text>Newsroom</Text>
          <Text>Apple Leadership</Text>
          <Text>Career Opportunities</Text>
          <Text>Investors</Text>
          <Text>Ethics & Compliance</Text>
          <Text>Events</Text>
          <Text>Contact Apple</Text>
        </VStack>
      </SimpleGrid>

      <Box mt="50px">
        <Text>More ways to shop: Find a retailer near you. Or call 000800 040 1966.</Text>
        <Divider/>
        <Text>Copyright © 2023 Apple Inc. All rights reserved. <Divider orientation='vertical'/>Privacy Policy <Divider orientation='vertical'/> Terms of Use</Text>
      </Box>
    </>

  )
}

export default Footer