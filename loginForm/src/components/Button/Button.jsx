import React from 'react'

function Button(props) {
  return <button type="submit" value={props.value}>{props.value}</button>
}

export default Button