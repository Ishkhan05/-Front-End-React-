import React, { useEffect, useState } from 'react'
import Navigation from '../Navigation/Navigation'
import "./Header.css"

export default function Header(){
  const [isSearch,setIsSearch] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [text, setText] = useState()
  const searching=()=>{
    setIsSearch(!isSearch)
  }
  const searchText = (e)=>{
    e.preventDefault()
    const { value } = e.target.search;
    setText(value)
    e.target.reset()
  }
  useEffect(() => {
    const handleScroll = () => {
      setHidden(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={hidden ? "hide" : ""}>
      <div className='Heading'>
        <img src="Logo.png" alt="logo"/>
        <div className='Search_field'>
          <img src="Search_icon.png" alt="search" onClick={()=>searching()}/>
          {isSearch ? <form onSubmit={searchText}><input type="search" name="search" id="search"/></form> : null}
        </div>
      </div>
      <Navigation/>
    </header>
  )
}
