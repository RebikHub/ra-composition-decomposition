import React from 'react'
import HeadLink from './HeadLink'

export default function SideItem({item}) {
  return (
    <div className="side-item">
      <img src={item.img} alt="..." />
      <HeadLink text={item.name} url={item.url}/>
      <p>{item.text}</p>
    </div>
  )
}
