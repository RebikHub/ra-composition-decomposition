import React from 'react'
import News from './News'
import SideItem from './SideItem'

export default function NewsSide({news, date, item, quotes}) {
  return (
    <div className="news-side">
      <News news={news} date={date} quotes={quotes}/>
      <SideItem item={item}/>
    </div>
  )
}
