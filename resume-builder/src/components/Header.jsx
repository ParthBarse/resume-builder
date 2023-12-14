// src/components/Header.js

import React from 'react';
import { Box, Flex, Image, Link, Text } from '@chakra-ui/react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Header = () => {
  return (
    <Box bg="#F0F8FF"  p={4}>
      <Flex align="center" justify="space-between">
        <Image src='logo.jpeg' alt="Logo" boxSize="6rem" />
        <Flex align="center">
          <Text color="navy" fontSize="1.2rem" fontWeight="bold" mr={4}>
            Call for Enquiry:
          </Text>
          <Text color="navy" fontSize="1.2rem" fontWeight="bold">
            +1 123 456 7890
          </Text>
        
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
