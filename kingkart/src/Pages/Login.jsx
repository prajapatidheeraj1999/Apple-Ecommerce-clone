import React from 'react'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import { useContext } from 'react';
import { AuthContext } from "../AuthContext/AuthContext"
import { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
export default function Login() {

  let { isAuth, loginUser, logoutUser } = useContext(AuthContext)

  let [ldata, setldata] = useState({ email: "", password: "" })



  let handellogin = (el) => {

    setldata({ ...ldata, [el.target.name]: el.target.value })
  }

  let loginUsers = () => {
    axios({
      method: "get",
      url: "http://localhost:8080/signup",
    })
      .then((res) => logincheking(res.data))
      .catch((error) => console.log(error))
  }
  let usename = ""
  let logincheking = (res) => {
    let ans = false

    res.map((el) => {
      if (el.email === ldata.email && el.password === ldata.password) {
        ans = true
        console.log("el.fristName")
        usename = el.fristName
        console.log(usename)
        console.log(el.fristName)
        
      }
    }
    )
    if (ans) {
      console.log(usename)
      loginUser(usename)

    } else {
      console.log("Something is wrong")
    }

  }
  if(isAuth)
  {
    return<Navigate to="/success"/>
  }
  console.log(ldata)
  console.log(isAuth)
  console.log(usename)

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
    // bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          // bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" name='email' onChange={handellogin} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" name='password' onChange={handellogin} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={loginUsers}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

