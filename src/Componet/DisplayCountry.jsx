import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import humanNumber from 'human-number'
const DisplayCountry = ({ Data }) => {
  
   

  return (
    <section className="  min-h-screen   relative mt-[100px] p-10">
      <div className=" mb-[50px] flex items-center gap-2  shadow-md p-1 shadow-gray-300  w-fit">
        <a href="#" className=" text-blue-600   font-bold">
          checek out similare project done by me using D3.js
        </a>
        <AiOutlineArrowRight size={20} className=" text-gray-300" />
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-4 gap-4">
        {Data.map((data) => {
          let langs =[]
          if(data.languages){
            langs=Object.values(data.languages)
            
          }
       
  console.log(langs)
          return (
            <div
              className=" border-[2px] border-[#30363D] p-4 "
              key={data.name.common}
            >
              <img
                src={data.flags.png}
                alt={data.flags.alt}
                width="100%"
                loading="lazy"
                className="w-full"
              />
              <h1 className=" text-gray-300 font-bold">
                <span className=" text-blue-500 font-extrabold"> Name : </span>
                {data.name.common}
              </h1>
              <p className="text-gray-300 font-bold">
                <span className=" text-blue-500 font-extrabold">
                  {" "}
                  Capital :{" "}
                </span>
                {data.capital}{" "}
              </p>
              <p className="text-gray-300 font-bold">
                <span className=" text-blue-500 font-extrabold">
                  {" "}
                  Region :{" "}
                </span>
                {data.region}
              </p>
         
              <p className="text-gray-300 font-bold">
                <span className=" text-blue-500 font-extrabold">
                  {" "}
                  Languages :
             
                </span>
            {
              langs.map((language, index) =>{
            return language +
            `${index === langs.length - 1 ? "" : " , "} `

              })
            }
              </p>
         

              <p className="text-gray-300 font-bold">
                <span className=" text-blue-500 font-extrabold">
                  {" "}
                  Population :{" "}
                </span>
                {
                humanNumber(data.population,n => Number.parseFloat(n).toFixed(1))
                }
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DisplayCountry;
