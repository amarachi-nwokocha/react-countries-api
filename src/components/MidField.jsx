import React from 'react'
import {Flex,Box,Input, Select} from '@chakra-ui/react'
import '../App.css'
const MidSpace = (data) => {
    const searchField =(e)=>{
        const searchText = e.target.value
        console.log(searchText)
        
    }
  return (
    <Flex className='cont'  p='6' minWidth='max-content' alignItems='center' gap='2'>
  <Box p='2'>
  <Input id='input' onChange={searchField} type='text' placeholder='Find a country'  />
  </Box>
  <Box>
  <Select id='regions' placeholder='Select option'>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>
  </Box>
</Flex>
  )
}

export default MidSpace