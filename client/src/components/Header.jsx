import React from 'react'

const Header = (props) => {
  return (
    <div className="header_wrapper">
      <div className="title">shop name here</div>
      <input type="text" className="searchbar" 
      placeholder="looking for something?" name="search" />
    </div>
  )
}

export default Header