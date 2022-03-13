import React from 'react'
import NewsBody from './NewsBody'
import NewsHeader from './NewsHeader'
import NewsQuotes from './NewsQuotes'

export default function News({news, date, quotes}) {
  console.log(quotes);
  return (
      <div className="news">
        <NewsHeader news={news} date={date}/>
        <NewsBody news={news[0].value}/>
        <NewsQuotes quotes={quotes}/>
      </div>
  )
}
