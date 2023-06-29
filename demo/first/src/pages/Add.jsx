import React, { useState } from "react";
import Select from 'react-select'


function Add(){

const [selectedList,setSelectedList]=useState([]);
  const menuList = [
    { value: "Chicken Biriyani", label: "Chicken Biriyani" },
    { value: "Chicken Fry", label: "Chicken Fry" },
    { value: "Chilly Chicken", label: "Chilly Chicken" },
    { value: "Chicken Pepper Dry", label: "Chicken Pepper Dry" },
    { value: "Kabab Chicken ", label: "Kabab Chicken" },
    { value: "Chicken Lolly Pup", label: "Chicken Lolly Pup" },
    { value: "Chicken Masala", label: "Chicken Masala" },
    { value: "Mutton Fry Biriyani", label: "Mutton Fry Biriyani" },
    { value: "Mutton kruma", label: "Mutton kruma" },
    { value: "Mutton Fry", label: "Mutton Fry" },
    { value: "Boty Masala", label: "Boty Masala" },
    { value: "Egg rice", label: "Egg rice" },
    { value: "Chicken Rice", label: "Chicken Rice" },
    { value: "Neer Dosa", label: "Neer Dosa" },
    { value: "Idly", label: "Idly" },
    { value: " Plain Dosa", label: "Plain Dosa" },
    { value: "Parota", label: "Parota" },
    { value: "Veg Rice", label: "Veg Rice" },
    { value: "Chappathi", label: "Chappathi" },
    { value: "Fish Fry", label: "Fish Fry" },
    { value: "Fish Masala", label: "Fish Masala" },
    { value: "Chicken Sawarma", label: "Chicken Sawarma" },
    {value:"Chicken Pizza",lable:"Chicken Pizza"},
    {value:"Veg Pizza",lable:"Veg Pizza"},
    {value:"Pongal",lable:"Pongal"},
    {value:"Vada",lable:"Vada"},
    {value:"Onion Dosa",lable:"Onion Dosa"},
    {value:"Rawa Dosa",lable:"Rawa Dosa"},
    {value:"Veg Pride Rice",lable:"Veg Pride Rice"},
    {value:"Chicken Noodles",lable:"Chicken Noodles"},
    {value:"Chicken 65",lable:"Chicken 65"},
    {value:"Chicken Manchuria",lable:"Chicken Manchuria"},
    {value:"Drup Spick",lable:"Drup Spick"},
    {value:"Chicken Tangdi",lable:"Chicken Tangdi"},
    {value:"Veg Spring Roll",lable:"Veg Spring Roll"},
    {value:"Egg Spring Roll",lable:"Egg Spring Roll"},
    {value:"Chicken Spring Roll",lable:"Chicken Spring Roll"},
    {value:"Paneer Spring Roll",lable:"Paneer Spring Roll"},
    {value:"Tandoori Chicken",lable:"Tandoori Chicken"},
    {value:"Chicken Burger",lable:"Chicken Burger"},
    {value:"Veg Pride Rice",lable:"Veg Pride Rice"},
    {value:"Fish Biriyani",lable:"Fish Biriyani"},
    {value:"Omelet",lable:"Omelet"}

  ];
 

  const handleSelectChange = (e) => {
    setSelectedList(e);
  }

  console.log(selectedList);

  return (
    <>
      <div>
        <h1 className="text-5xl text-blue-500 font-serif">Menu List</h1>
      </div><br></br>
      <div>
        <h1 className="text-3xl text-red-600 font-mono text-right">Total Item:{selectedList.length}</h1>
      </div>
      <div className="container  mt-8 " >
        <Select 
        isMulti
        options={menuList}
        onChange={handleSelectChange}
        className="text-2xl"
        placeholder="Select Your Item"
        />
        <div>
          <br></br>
<button className="bg-blue-500 hover:bg-black-700 text-white font-bold py-2 px-4 rounded rounded-xl">
            Place Your Oreder </button>
        </div>
      </div>
    </>
  );
}

export default Add
  
