import React from 'react'

export default function HeadLink({text, url}) {
  return (
    <a href={url}>
      <h3>{text}</h3>
    </a>
  )
}
