import axios from "axios";
export const contCode= async(code)=>{
 
   const codeData = await axios.get(`https://restcountries.com/v3.1/alpha/${code}`)
   return codeData.data
}