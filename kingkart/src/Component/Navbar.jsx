import { Box, Button, Center, Flex, HStack, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../images/Kingkart.png'
import { UilShoppingCartAlt } from '@iconscout/react-unicons'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import {AuthContext} from '../AuthContext/AuthContext'

function Navbar() {
  let {isAuth,loginUser,logoutUser,usename}=useContext(AuthContext)
  console.log("SuccessName"+ usename)
  console.log(isAuth)
  return (
    <Flex  bg="black" color="white" >
        <HStack ml={6} >
            <Center>
                <Image src={logo} alt='Logo' boxSize='50px' borderRadius='full'/>
            </Center>
            <Center ><Text ml={10}><Link to="/">Home</Link></Text></Center>
            <Center ><Text ml={10}><Link to="/store">Store</Link></Text></Center>
            <Center ><Text ml={10}><Link to="/mac">Mac</Link></Text></Center>
            <Center ><Text ml={10}><Link to="/iPad">iPad</Link></Text></Center>
            
        </HStack>
        <Spacer/>
        <HStack mr={6}>
            
            <Center><Text mr={10}><Link to="/signup" disabled={isAuth}>{isAuth?usename:"SignUp"}</Link></Text></Center>
            {/* <Button>Logout</Button> */}
            <Center><Text mr={10}><Link to="/logout">Logout</Link></Text></Center>
            {/* <Center><Text mr={10}><Link to="/success">success</Link></Text></Center> */}
            <Center><UilShoppingCartAlt/></Center>
        </HStack>
    </Flex>
  )
}

export default Navbar