import React from 'react'
import {Flex, Box, Heading, Switch} from '@chakra-ui/react'
// import '../App.css'
const TopBar = () => {
  return (      
     <Flex className='nav' boxShadow='lg' p='2' minWidth='max-content' alignItems='center' gap='2'>
  <Box p='2'>
    <Heading size='md'>Where in the world ?</Heading>
  </Box>
  
  <Switch size='md' />
</Flex>
  )
}

export default TopBar