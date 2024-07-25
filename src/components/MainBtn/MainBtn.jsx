import MainBtn1 from  "../../assets/images/mainBtn-img1.svg"
import MainBtn2 from  "../../assets/images/mainBtn-img2.svg"

import React from 'react'
function MainBtn() {
  return (
    <div className="flex items-center justify-end gap-[13px] mt-[49px] mr-[113px]">
      <button className="bg-[#8BAC3E] text-[#FFFFFF] py-[9px] pl-[18px] pr-[13px] rounded-[100px] gap-[8px] w-[113px] flex items-center"><img  className="w-[32px] h-[32px]" src={MainBtn1} alt="img" />PREV</button>
      <button className="bg-[#8BAC3E] text-[#FFFFFF] py-[9px] pl-[18px] pr-[13px] rounded-[100px] gap-[8px] w-[113px] flex items-center">NEXT <img className="w-[32px] h-[32px]"  src={MainBtn2} alt="img" /></button>
    </div>
  )
}

export default MainBtn
