import {React, useState, useEffect}from 'react'
import Home from './Home.jsx'
import MidSpace from './MidField';
import { Spinner } from '@chakra-ui/react'
const Fetch = () => {
const [data, setData] =useState([])
const [error, setError] = useState('')
const [loading, setLoading] = useState(true)

 
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
          .then((res) => res.json())
          .then(  (result) => {
            setData(result);
            setLoading(false)
          //   console.log(result)
          // console.log(data);
          },
          (error) => {
            setError(error);
            setLoading(false)
            console.log(error.message);
          }
        ); }, [data]);      

  return (
    <>
    {loading ?(<Spinner size='lg' color='red.500' />) : error ?(
      <div>{error.message}</div>
    ) :(
      <>
<Home data ={data} />
</>
      )
    }
    </>
  )
}

export default Fetch