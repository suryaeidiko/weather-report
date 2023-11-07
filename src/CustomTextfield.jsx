import React from 'react'

export default function CustomTextfield({value,handlechange}) {
  return(
    <input value={value} onChange={handlechange}></input>
  )
  
}
