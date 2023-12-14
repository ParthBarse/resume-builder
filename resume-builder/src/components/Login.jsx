import React from 'react';
import { ChakraProvider, extendTheme, Box, Flex, Heading, Input, Button, Link } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'black',
      },
    },
  },
});

const LoginPage = () => {
  const handleAdminLogin = () => {
   
    navigate('/Admin');
  };





  const navigate = useNavigate();

  const handleLogin = () => {
    // Implement your login logic here
    //alert('Login clicked!');
    navigate('/Create');
  }
    const handleRegister = () => {
    // Implement your register logic here
    //alert('Register clicked!');
    navigate('/Registration');
  };

  const handleForgotPassword = () => {
    // Implement your forgot password logic here
    navigate('/Forget-Password');
  };

  return (
    <ChakraProvider theme={theme}>
      <Flex
        align="center"
        justify="center"
        h="100vh"
      >
        <Box p={8} maxWidth="400px" borderWidth={1} borderRadius={8} boxShadow="lg" bg="#00b0ff">
          <Heading mb={4} textAlign="center" color="white">
            Login
          </Heading>
          <Input
            placeholder="Username"
            mb={4}
            color="black"
            bg="white"
          />
          <Input
            type="password"
            placeholder="Password"
            mb={4}
            color="black"
            bg="white"
          />
          <Flex direction="column" align="center" mb={4}>
           
            <Button
              onClick={handleLogin}
              colorScheme="blackAlpha"
              mb={2}
              width="100%"
            >
              Login
            </Button>
            <Link onClick={handleForgotPassword} color="white" fontSize="sm" mb={4}>
              Forgot Password?
            </Link>
            <Button
              onClick={handleRegister}
              colorScheme="blackAlpha"
              mb={2}
              width="100%"
            >
              Register
            </Button>
          </Flex>
          <Button
            onClick={handleAdminLogin}
            colorScheme="blackAlpha"
    
            width="100%"
          >
            Login as Admin
          </Button>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default LoginPage;
