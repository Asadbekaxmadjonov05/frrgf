import React from 'react'

const TreadingItem = ({item})  =>{
  return (
    <li style={{backgroundColor:item.bg}} className={`w-[287px] pt-[16px] pb-[33px] pl-[24px] rounded-[17px]`} key={item.id}>
        <img src={item.img} alt="img"  className="w-[118px] h-[120px] rounded-[8px] pb-[19px]"/>
        <h2 className="text-[#000000] text-[26px] leading-[50px] font-medium" >{item.title}</h2>
        <p className="pb-[19px] text-[#8BAC3E] text-[18px] leading-[21px] font-medium pt-[9px]">{item.name}</p>
        <img src={item.star} alt="star img" />
    </li>
  )
}

export default TreadingItem
