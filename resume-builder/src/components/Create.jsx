import React from 'react';
import { ChakraProvider, Box, Button, Text } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate();
  return (
    <ChakraProvider>
      <Box textAlign="center" p="8" marginBottom={'35%'}>
        <Button
          bg="#00b0ff"
          color="white"
          borderRadius="full"
          size="lg"
          boxShadow="lg"
          onClick={() => {
          navigate('/Resume')
          }}
        >
          <Box as={FaPlus} fontSize="2xl" mr="2" />
        </Button>
        <Text mt="4" fontSize="xl">
          Create new
        </Text>
      </Box>
    </ChakraProvider>
  );
};

export default Create;
