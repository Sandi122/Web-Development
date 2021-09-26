import React, { useState } from 'react';
import "./style.css";
import Menu from "./menuApi";
import MenuCard from './MenuCard';
import NavBar from './NavBar';

 //maping of data(feature of ecma 6)
const uniqueList = [ ...new Set(Menu.map((curElem) =>{        //use of (...)spread operator
          return curElem.category;                       // new Set is used to prevent repetation of category
     })
   ),
    "All" 
 
];
  console.log(uniqueList);


const Restaurant = () => {

      const [menuData, setMenuData] = useState(Menu);
      const [menuList] = useState(uniqueList);

      const filterItem = (category) =>{

        if(category === "All"){
            setMenuData(Menu);
            return;
        }

          const updatedList = Menu.filter((curElem) => {
              return curElem.category === category;
          });
          setMenuData(updatedList);
      };
     

    return (
        <>
          <NavBar filterItem = {filterItem} menuList = {menuList} />
         <MenuCard menuData = {menuData} />
        </>
    )
}

export default Restaurant;