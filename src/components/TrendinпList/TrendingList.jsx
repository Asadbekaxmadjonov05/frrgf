// Images finesh
import TrendigImg1 from "../../assets/images/treding-img1.png"
import TrendigImg2 from "../../assets/images/treding-img2.png"
import TrendigImg3 from "../../assets/images/treding-img3.png"
import TrendigImg4 from "../../assets/images/treding-img4.png"
import TrendigImg5 from "../../assets/images/treding-img5.png"
import TrendigImg6 from "../../assets/images/treding-img6.png"
import TrendigImg7 from "../../assets/images/treding-img7.png"
import TrendigImg8 from "../../assets/images/treding-img8.png"
// Images finesh

// Images Star Start
import StarImg1 from "../../assets/images/start-img1.png"
import StarImg2 from "../../assets/images/start-img2.png"
import StarImg3 from "../../assets/images/start-img3.png"
import StarImg4 from "../../assets/images/start-img4.png"
import StarImg5 from "../../assets/images/start-img1.png"
import StarImg6 from "../../assets/images/start-img3.png"
import StarImg7 from "../../assets/images/start-img1.png"
import StarImg8 from "../../assets/images/start-img1.png"
// Images Star finesh


import TreadingItem from "../TreadingItem/TreadingItem"
import  TrendingBtn from "../TrendingBtn/TrendingBtn"
import React from 'react'
function TrendingList() {
    const categories = [
        {
            id:1,
            img:TrendigImg1,
            title:"Pizza Paperoni",
            name:"Pizza",
            star:StarImg1,
            bg:"#E6F3F5"
        },
        {
            id:2,
            img:TrendigImg2,
            title:"Pizza Meat",
            name:"Pizza",
            star:StarImg2,
            bg:"#E6F3F5"
        },
        {
            id:3,
            img:TrendigImg3,
            title:"Doner Kebab",
            name:"Kebab",
            star:StarImg3,
            bg:"#EAEEFA"
        },
        {
            id:4,
            img:TrendigImg4,
            title:"Salmon Roll",
            name:"Salmon",
            star:StarImg4,
            bg:"#F9EEF3"
        },
        {
            id:5,
            img:TrendigImg5,
            title:"Cupcake Choco",
            name:"Cupcake",
            star:StarImg5,
            bg:"#F0FEEB"
        },
        {
            id:6,
            img:TrendigImg6,
            title:"Doughnut Milk",
            name:"Doughnut",
            star:StarImg6,
            bg:"#F3F7D9"
        },
        {
            id:7,
            img:TrendigImg7,
            title:"Doughnut Unicorn",
            name:"Doughnut",
            star:StarImg7,
            bg:"#F3F7D9"
        },
        {
            id:8,
            img:TrendigImg8,
            title:"Kathi Kebab",
            name:"Kathi",
            star:StarImg8,
            bg:"#EAEEFA"
        },
    ]
  return (
    <>
    <ul className="flex flex-wrap justify-between w-[1200px] mx-auto mt-10 gap-[17px] pt-[55px] "> 
    {categories.map((item, index) => <TreadingItem item={item}/> )}
    </ul>
    <TrendingBtn/>
    </>
  )
}

export default TrendingList
