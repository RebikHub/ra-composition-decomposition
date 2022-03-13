import React from 'react'

export default function NewsItem({img, url, text}) {
  return (
    <>
      <img src={img} alt="..." />
      <a href={url}>{text}</a>
    </>
  )
}
