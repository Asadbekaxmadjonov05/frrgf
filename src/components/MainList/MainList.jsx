import React from 'react'

import Item from "../../components/Item/Item"
import Cupcake from "../../assets/images/mainList-img1.png"
import Pizza from "../../assets/images/mainList-img2.png"
import Kebab from "../../assets/images/mainList-img3.png"
import Salmon from "../../assets/images/mainList-img4.png"
import Doughnut from "../../assets/images/mainList-img5.png"

function MainList() {
    const categories = [
        {
            id:1,
            img:Cupcake,
            title:"Cupcake",
            count:"22 Items",
            bg:"#F0FEEB"
        },
        {
            id:2,
            img:Pizza,
            title:"Pizza",
            count:"25 Items",
            bg:"#F9EEF3"
        },
        {
            id:3,
            img:Kebab,
            title:"Kebab",
            count:"12 Items",
            bg:"#EAEEFA"
        },
        {
            id:4,
            img:Salmon,
            title:"Salmon",
            count:"22 Items",
            bg:"#F9EEF3"
        },
        {
            id:5,
            img:Doughnut,
            title:"Doughnut",
            count:"11 Items",
            bg:"#F3F7D9"
        },
    ]
  return (
    <ul className='flex justify-between w-[1200px] mx-auto mt-10 '>
        {categories.map((item, index) => <Item item={item}/> )}
    </ul>
  )
}

export default MainList
