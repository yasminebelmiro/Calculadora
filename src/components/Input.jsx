import React from 'react'

const Input = (props) => {
  return (
    <input className="result" type="text"  value={props.value} readOnly={true}/>
  )
}

export default Input