import React from 'react'

const Background = ({ children }) => {
  return (
    <div className="wrapper-body transition-all h-screen w-screen">
      {children}
    </div>
  )
}

export default Background
