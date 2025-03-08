import {  useEffect, useState } from 'react'
import axios from 'axios'
import Content from './Components/Content/Content'
import Header from './Components/Header/Header'
import MyContext from './Context/context'
import './App.css'

function App() {
  const [posts, setPosts] = useState()
  const [postInfoModal, setPostInfoModal] = useState(false)
  const [currentPost, setCurrentPost] = useState()
  const [isSearch, setIsSearch] = useState(false)
  const [startSearching, setStartSearching] = useState(false)
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false)
  const [text, setText] = useState()
  const [menu] = useState(["Demos","Post","Features","Categories","Shop","Buy Now"])
  const [subMenu] = useState(["Post Header","Post Layout","Share Buttons","Gallery Post","Video Post"])
  const searching=()=>{
    setIsSearch(!isSearch)
    setStartSearching(false)
  }
  const searchText = (e)=>{
    e.preventDefault()
    const { value } = e.target.search;
    setStartSearching(true)
    setText(value)
  }
  useEffect(() => {
    function clickHandler(e){
      if(startSearching && e.target.id !== "search"){
        setStartSearching((prevValue)=>!prevValue)
        setIsSearch(false)
      }
    }
    document.documentElement.addEventListener("click", clickHandler)
    return () => {
      document.documentElement.removeEventListener("click", clickHandler)
    }
  }, [startSearching])
  useEffect(() => {
    axios(import.meta.env.VITE_DB_URL).then((res)=>setPosts(res.data))
  }, [])
  return (
    <div className='App'>
      <MyContext.Provider 
        value={{
          posts,
          postInfoModal,
          setPostInfoModal,
          currentPost,
          setCurrentPost,
          isSearch,
          setIsSearch,
          text,
          setText,
          searching,
          searchText,
          startSearching,
          setStartSearching,
          menu,
          subMenu,
          isOpenBurgerMenu, 
          setIsOpenBurgerMenu
        }}
      >
        <Header/>  
        <Content/>
      </MyContext.Provider>
    </div>
  )
}

export default App