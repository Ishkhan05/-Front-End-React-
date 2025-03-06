import {  useEffect, useState } from 'react'
import './App.css'
import Content from './Components/Content/Content'
import Header from './Components/Header/Header'
import axios from 'axios'
import MyContext from './Context/context'

function App() {
  const [posts, setPosts] = useState()
  const [postInfoModal, setPostInfoModal] = useState(false)
  const [currentPost, setCurrentPost] = useState()
  const [isSearch, setIsSearch] = useState(false)
  const [startSearching, setStartSearching] = useState(false)
  const [text, setText] = useState()
  const searching=()=>{
    setIsSearch(!isSearch)
  }
  const searchText = (e)=>{
    e.preventDefault()
    const { value } = e.target.search;
    setStartSearching(true)
    setText(value)
  }
  useEffect(() => {
    axios("https://cloud.codesupply.co/endpoint/react/data.json")
    .then(res=>setPosts(res.data))
  }, [])
  return (
    <div className='App'>
      <MyContext.Provider value={{posts,postInfoModal,setPostInfoModal,currentPost,setCurrentPost,isSearch,setIsSearch,text,setText,searching,searchText,startSearching,setStartSearching}}>
        <Header/>
        <Content/>
      </MyContext.Provider>
    </div>
  )
}

export default App