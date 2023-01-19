import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { AuthContext } from '../AuthContext/AuthContext';
import { useContext } from 'react';
import {Link} from "react-router-dom"

export default function Success() {
    let {isAuth,loginUser,logoutUser,usename}=useContext(AuthContext)
    console.log("SuccessName"+ usename)
  return (
    <Box textAlign="center" py={10} px={6}>
      <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
      Welcome to KingKart {usename}
      </Heading>
      <Text color={'gray.500'}>
       Hii {usename}
      </Text>
      <Link to="/"><Button>Home page</Button> </Link>
    </Box>
  );
}