import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./Content.css"

export default function Content() {
  const [posts, setPosts] = useState()
  const [postInfoModal, setPostInfoModal] = useState(false)
  const [currentPost, setCurrentPost] = useState()
  useEffect(() => {
    axios("https://cloud.codesupply.co/endpoint/react/data.json")
    .then(res=>setPosts(res.data))
  }, [])
  const postInfo = (title)=>{
    setPostInfoModal(!postInfoModal)
    setCurrentPost(posts.find((elem)=>elem.title == title))
  }
  const modalClose = (e) =>{
    e.target.className=="modal" ? setPostInfoModal(false): null 
  }
  return (
    <div className='Content'>
      {
        posts?.map(post=>{
          return(
            <div key={post?.title} className='post' onClick={()=>postInfo(post.title)}>
              <picture>
                <source media="(min-width:1080px)" srcSet={post.img_2x} />
                <source media="(min-width:465px)" srcSet={post.img} />
                <img src={post.img_2x} alt={post.name} style={{width: "auto"}} />
              </picture>
              <p>{post.tags}</p>
              <h2>{post.title}</h2>
              <div>
                <p>{post.autor}</p>
                <p>{post.date}</p>
                <p>{post.views}</p>
              </div>
              <p>{post.text}</p>
            </div>
          )
        })
      }
      {postInfoModal? (
        <div className='modal' onClick={modalClose}>
          <div className='postInfo'>
            <picture>
              <source media="(min-width:1080px)" srcSet={currentPost.img_2x} />
              <source media="(min-width:465px)" srcSet={currentPost.img} />
              <img src={currentPost.img_2x} alt={currentPost.name} style={{ width: "auto" }} />
            </picture>
            <p>{currentPost.tags}</p>
            <h2>{currentPost.title}</h2>
            <div>
              <p>{currentPost.autor}</p>
              <p>{currentPost.date}</p>
              <p>{currentPost.views}</p>
            </div>
            <p>{currentPost.text}</p>
          </div>
        </div>) 
        :null}
    </div>
  )
}
