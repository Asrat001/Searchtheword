import React, { useState } from 'react'
import {BiSearch} from 'react-icons/bi'
import {useForm} from 'react-hook-form'

const SearchForm = ({HandelSearch,fechSerach}) => {
  const form = useForm()
  const {register,handleSubmit,formState,watch} = form
  const {errors} = formState
 const name = watch("country")
 sessionStorage.setItem("name", name)
  return (
    <main>
 <form className=' flex  items-center gap-2 sm:gap-4'onSubmit={handleSubmit(HandelSearch)} noValidate>
    <div className='bg-transparent w-[200px] sm:w-auto border-[1px] flex items-center gap-4  rounded-lg border-[#30363D] p-2 text-gray-600 '>
    <BiSearch className='' size={20}/>
           <input
           placeholder='search the world'
           id='country'
           className=' outline-none bg-transparent  w-[180px] md:w-auto'
           {...register("country",{
            required:{
              value:true,
              message:"country name  is required"
            },
            pattern:{
              value:/^[A-Z]+$/i,
              message:"invalid country name"
            }
           })}
           />
         
       </div>
       <button type='submit' onSubmit={fechSerach}  className='p-2 bg-transparent border-[1px] border-[#30363D] rounded-lg text-gray-100'>
         Search
       </button>
    </form>
    <p className=' text-red-600  text-[12px] font-extrabold'>{errors.country?.message}</p>
    </main>
   
  )
}

export default SearchForm 