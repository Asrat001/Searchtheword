import React, { useState } from 'react'
import Main from './DisplayCountry'
import { useQuery } from 'react-query'
import axios from 'axios'
import Loding from './Loding'
import { HiMenu } from 'react-icons/hi'
import SearchForm from './SearchForm'
import RegionForm from './RegionForm'
import DisplayCountry from './DisplayCountry'




const Index = () => {
  const [res,setRes] = useState()


  const fetchData = async ()=>{
  const res = await axios.get('https://restcountries.com/v3.1/all')
  
   setRes(res.data)
   return res
      
  }
const  HandelSearch = async ()=>{
  
   const res = await axios.get(`https://restcountries.com/v3.1/name/${sessionStorage.getItem("name")}`)
   setRes(res.data)
   return res
 }
 
 const  HandelReg = async ()=>{
  if(sessionStorage.getItem("reg")!==""&&sessionStorage.getItem("reg")!=="All"){
    const res = await axios.get(`https://restcountries.com/v3.1/region/${sessionStorage.getItem("reg")
  }`)
    setRes(res.data)
    return res
  }else if(sessionStorage.getItem("reg")=="All"){
    fetchData()
  }
}



const {isLoading} = useQuery('country-data',fetchData)
const {isLoading:isSeraching,
  refetch:fechSerach,isError
} = useQuery('search',HandelSearch,{enabled:false})

const {isLoading:loddingRegion,isError:errorLodingRegion,error,refetch:fechRegion}= useQuery('region-data',HandelReg,{enabled:false})

const HandleSelectChange = (event) => {
 let value = event.target.value
   sessionStorage.setItem("reg", value)
  fechRegion()
 
};
  if(isLoading||isSeraching||loddingRegion){
    return <Loding/>
  }

if(isError){
  return<h1 className=' text-blue-700 text-[25px]'>{`No country named :${name}`}</h1>
}
if(errorLodingRegion){
  return<h1 className=' text-blue-700 text-[25px]'>{`error loding region ${error}`}</h1>
}

 
  return (
    <div className=' '>
          <header className='flex  gap-2  fixed top-0  w-full z-20  justify-between p-[5px] sm:px-[50px] items-center bg-[#010508] h-28  border-b-[0.2px] border-[#30363D]'>
  
  <div>
    <div className=' hidden md:block'>
    <h1 className=' text-white text-lg'>Serach The World</h1>
   <p className=' text-gray-400 text-[10px]'> by Asrat Adane</p>
   </div>
    <button  className=' block sm:hidden border-[1px] border-[#30363D] rounded-lg p-1'>
       <HiMenu className='w-8 h-8 text-[#30363D]'/>
    </button>
  </div>
<SearchForm HandelSearch={HandelSearch} fechSerach={fechSerach}/>
<RegionForm HandleSelectChange={HandleSelectChange}/>
    </header>
         <DisplayCountry Data={res}/>
    </div>
  )
}

export default Index