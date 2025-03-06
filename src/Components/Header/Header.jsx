import React, { useContext, useEffect, useState } from 'react'
import Navigation from '../Navigation/Navigation'
import "./Header.css"
import SearchPosts from '../SearchPosts/SearchPosts'
import MyContext from '../../Context/context'

export default function Header(){
  const value = useContext(MyContext)
  const [hidden, setHidden] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setHidden(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])
  return (
    <header className={hidden ? "hide" : ""}>
      <div className='Heading'>
        <img src="Logo.png" alt="logo"/>
        <div className='Search_field'>
          <img src="Search_icon.png" alt="search" onClick={()=>value.searching()}/>
          {value.isSearch ? <form onSubmit={value.searchText}><input type="search" name="search" id="search"/></form> :null}
          {value.startSearching ? <SearchPosts/> :null}
        </div>
      </div>
      <Navigation/>
    </header>
  )
}
