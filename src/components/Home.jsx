import {React, useState, useEffect}from 'react'
import {Flex,Box,Input, Select} from '@chakra-ui/react'
import { Link } from "react-router-dom";
// import '../App.css'
const Home = (data) => {

  const [filtered, setFiltered] = useState(data?.data)
//  console.log(data)
const[select, setSelect] = useState()
const[selectData, setSelectData] = useState()
let filteredItems = []
const searchField =(e)=>{
  const searchText = e.target.value
  console.log(searchText)
  console.log(data)
  setFiltered(data.data.filter((item) => {
return typeof item.name.official === 'string' ? item.name.official.toLowerCase().includes(searchText) : ' '
  
  }))
  console.log(filtered)
}

const handleSelect =(e) =>{
    setSelect(e.target.value)
    console.log(  select );
    if(select !== null || 'undefined'){
      const selectedRegion = fetch(`https://restcountries.com/v3.1/region/${select}`)
    .then((res) => res.json())
    .then(  (result) => {
      setFiltered(result);
      console.log(filtered)
    }
    )
      console.log(selectedRegion)
}
}



 const mappedData = filtered?.length > 0 ? filtered?.map((item)=>(
  <Link to="/country" >  
 <div className='card' key={item.name.official}>
        <img className='image' src={item.flags.png} />
    <div className='text'>
        <h2 className ='bold-text'> { item.name.official }</h2>
        <p> <b>Population : </b>{ item.population}</p>
        <p><b>Region :</b>{ item.region}</p>
        <p><b>Capital :</b>{ item.capital}</p>    
    </div>
    </div>
    </Link>
) 
) : "No data "
  return (
    <>
     <Flex className='cont'  p='6' minWidth='max-content' justifyContent ='space-between' alignItems='center' gap='2'>
  <Box p='2'>
  <Input id='input' onChange={searchField} type='text' placeholder='Find a country'  />
  </Box>
  <Box>
  <Select id='regions' name={'select'} onChange={(e) =>handleSelect(e)} color={'black'} placeholder='Select a region'>
  <option value='all'>regions</option>
  <option value='africa'>Africa</option>
  <option value='asia'>Asia</option>
  <option value='america'>Americas</option>
  <option value='oceania'>Oceania</option>
  <option value='europe'>Europe</option>
  //Africa, Americas, Asia, Europe, Oceania
</Select>
  </Box>
</Flex>
    <div className='general-cont'>
    {mappedData}
    </div>
    </>
  )
}

export default Home