import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { Link, useParams } from 'react-router-dom'
import Loding from './Loding'
import humanNumber from "human-number";

const DisplayDetail = () => {
    const {name} =useParams()
   
    const fetchData = async name=>{
        
   const res = await axios.get(`https://restcountries.com/v3.1/name/${name}`)
         return res
            
        }

        const {isLoading,data} = useQuery({queryKey:['detail',name],queryFn:()=>fetchData(name)})
  

        if(isLoading){
            return <Loding/>
          }
  return (
    <React.Fragment >
        <main className=' mt-10 p-4'>
        <Link to='/Searchtheword/' className=' p-2 bg-slate-200 text-gray-700  rounded-lg '>
        Go Back
        </Link>
        <div className=' flex flex-col md:flex-row  justify-around'> 
        <div className='mt-4'>
            <img src={data.data[0].flags.png} alt={data.data[0].flags.alt}/>

        </div>
        <div>
        <h1 className=" text-gray-300 font-bold">
                <span className=" text-blue-500 font-extrabold"> Name : </span>
                {data.data[0].name.common}
              </h1>
              <p className="text-gray-300 font-bold">
                <span className=" text-blue-500 font-extrabold">
                  {" "}
                  Capital :{" "}
                </span>
                {data.data[0].capital}{" "}
              </p>
              <p className="text-gray-300 font-bold">
                <span className=" text-blue-500 font-extrabold">
                  {" "}
                  Region :{" "}
                </span>
                {data.data[0].region}
              </p>

              <p className="text-gray-300 font-bold">
                <span className=" text-blue-500 font-extrabold">
                  {" "}
                  Languages :
                </span>
                {Object?.values(data.data[0].languages).join(',')}
                 
              </p>
              <p className="text-gray-300 font-bold">
                <span className=" text-blue-500 font-extrabold">
                  {" "}
                  Population :{" "}
                </span>
                {data.data[0].subregion
                
            }
              </p>
              <p className="text-gray-300 font-bold">
                <span className=" text-blue-500 font-extrabold">
                  {" "}
                  Population :{" "}
                </span>
                {data.data[0].subregion
                
            }
              </p>
              <p className="text-gray-300 font-bold">
                <span className=" text-blue-500 font-extrabold">
                  {" "}
                  Currencies: :{" "}
                </span>
                {Object.values(data.data[0].currencies).map(currency => currency.name).join(', ')}
              </p>
              <p className="text-gray-300 font-bold">
                <span className=" text-blue-500 font-extrabold">
                  {" "}
                  Population :{" "}
                </span>
                {humanNumber(data.data[0].population, (n) =>
                  Number.parseFloat(n).toFixed(1)
                )}
              </p>
              <p className="text-gray-300 font-bold">
                <span className=" text-blue-500 font-extrabold">
                  {" "}
                  Area:{" "}
                </span>
                {`${humanNumber(data.data[0].area, (n) =>
                  Number.parseFloat(n).toFixed(1)
                )} squire kilometer`}
              </p>
           
              
                {data.data[0].borders && (
                  <>
                    <h3 className="text-blue-500 font-bold text-lg mb-2 ">
                      Borders:
                    </h3>
                    <ul className="flex flex-wrap items-start justify-start gap-2">
                      {data.data[0].borders.map((border, index) => (
                        <li
                          key={index}
                          className="bg-white p-2 rounded text-xs tracking-wide shadow text-gray-700"
                        >
                          {border}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

        </div>
        </div>
        </main>
   
    </React.Fragment>
  )
}

export default DisplayDetail