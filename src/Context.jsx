import axios from 'axios';
import {createContext,useContext, useState} from 'react'
import { useQuery } from 'react-query';
 const searchContext = createContext()

 export const SerachContextProvider =({children})=>{

  const [data , setData] = useState()
    const fetchData =()=>{
        const {isLoading ,data} = useQuery('country-data',()=>{
            return  axios.get('https://restcountries.com/v3.1/all')
            
          })
          setData(data)
          return isLoading
         
    }
    const HandelSearch = ({region})=>{
 const {isLoading,data}=useQuery("region",()=>{
    return axios.get(`https://restcountries.com/v3.1/region/${region}`)
 })
 setData(data)
 console.log(data)
 return {isLoading}
    }
    const HandelRegion =({name})=>{
        const {isLoading,data} =useQuery("serach",()=>{
            return axios.get(`https://restcountries.com/v3.1/name/${name}`)
        })
        setData(data)
        console.log(data)
        return {isLoading}
    }
    return (
        <searchContext.Provider value={{fetchData,HandelRegion,HandelSearch,data}}>
          {children}
        </searchContext.Provider>
      );
 }

 export const UserSearch =()=>{
    return useContext(searchContext)
 }