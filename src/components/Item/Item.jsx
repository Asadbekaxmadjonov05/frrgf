import React from 'react'

const Item = ({item}) => {
  return (
    <li style={{backgroundColor:item.bg}} className= {`w-[230px] py-[30px] text-center `} key={item.id}>
    <img className='mx-auto mb-4'  src={item.img} alt='Img' width={47} height={52} />
    <h2 className='mb-2 text-[16px] leading-[22px] font-medium'>{item.title}</h2>
    <p className='text-[14px] leading-[16px] font-normal'>{item.count}</p>
    </li>
  )
}

export default Item
