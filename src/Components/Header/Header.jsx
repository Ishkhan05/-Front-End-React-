import React, { useContext, useEffect, useState } from 'react'
import classNames from 'classnames';
import Navigation from '../Navigation/Navigation'
import SearchPosts from '../SearchPosts/SearchPosts'
import MyContext from '../../Context/context'
import MobileNavigation from '../Navigation/MobileNavigation';
import "./Header.css"

export default function Header(){
  const value = useContext(MyContext)
  const [hidden, setHidden] = useState(false)
  const [timeoutId, setTimeoutId] = useState(null)
  const [mobileMenu, setMobileMenu] = useState(false)
  const [resizeTimeoutId, setResizeTimeoutId] = useState(null)
  const openMobileMenu = ()=>{
    value.setIsOpenBurgerMenu(!value.isOpenBurgerMenu)
    value.setIsSearch(false)
  }
  useEffect(() => {
    const handleScroll = () => {
      if(timeoutId){
        clearTimeout(timeoutId)
      }
      const newTimeout = setTimeout(() => {
        setHidden(window.scrollY > 200)
      }, 120)
      setTimeoutId(newTimeout)
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [timeoutId])
  useEffect(() => {
    const resize = () => {
      if(resizeTimeoutId){
        clearTimeout(resizeTimeoutId)
      }
      const newTimeout = setTimeout(() => {
        setMobileMenu(window.innerWidth < 376)
      }, 120)
      setResizeTimeoutId(newTimeout)
    }
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [resizeTimeoutId])
  return (
    <header className={hidden ? "hide" : ""}>
      <div className='Heading'>
        {
          mobileMenu
          ?<div className={classNames("menuBurger",{"active" : value.isOpenBurgerMenu})}>
            <div className="burgers" onClick={openMobileMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            {
              value.isOpenBurgerMenu?
                <MobileNavigation/>
              :null
            }
          </div>
          :null
        }
        {
          !value.isOpenBurgerMenu?
          <img src="Logo.png" alt="logo"/>
          :null
        }
        <div className='Search_field'>
          <img src="Search_icon.png" alt="search" onClick={()=>value.searching()}/>
          {value.isSearch ? <form onSubmit={value.searchText}><input type="search" name="search" id="search"/></form> :null}
          {value.startSearching ? <SearchPosts/> :null}
        </div>
      </div>
      {
        !mobileMenu
        ?<Navigation/>
        :null
      }
    </header>
  )
}
