import React from "react"

function User({name,job}) {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{job}</h1>
    </div>
  )
}

export default User