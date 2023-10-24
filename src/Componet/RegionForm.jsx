import React from 'react'
import {useForm} from 'react-hook-form'

const RegionForm = ({HandleSelectChange,toggle}) => {
    const form = useForm()
    const {register,handleSubmit,formState,watch} = form
    const {errors} = formState
   const name = watch("country")
  return (
    <main>
   <form onSubmit={(e) => e.preventDefault()} noValidate>

     <select  onChange={HandleSelectChange} className={' hidden md:block outline-none bg-transparent border-[1px] border-[#30363D] rounded-lg p-2 text-gray-100'}>
                        <option value="">Region</option>
                        <option value="All">all</option>
                        <option value="Asia">Asia</option>
                        <option value="Africa">Africa</option>
                        <option value="America">America</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
     </select>
   </form>
    </main>
  )
}

export default RegionForm