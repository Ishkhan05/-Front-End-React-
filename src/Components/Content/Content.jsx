import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./Content.css"

export default function Content() {
  const [posts, setPosts] = useState()
  const [bigImage, setBigImage] = useState(false)
  const [bigImageLink, setBigImageLink] = useState()
  useEffect(() => {
    axios("https://cloud.codesupply.co/endpoint/react/data.json")
    .then(res=>setPosts(res.data))
  }, [])
  const image2x = (link)=>{
    setBigImage(!bigImage)
    setBigImageLink(link)
  }
  const modalClose = (e) =>{
    if(e.target.tagName!=="IMG"){
      setBigImage(false)
    }
  }
  return (
    <div className='Content'>
      {
        posts?.map(post=>{
          return(
            <div key={post?.title} className='post'>
              <img src={post.img} alt="" onClick={()=>image2x(post.img_2x)}/>
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
      {bigImage? (<div className='bigImage'  onClick={modalClose}>
        <img src={bigImageLink} alt=""/>
      </div>) :null}
    </div>
  )
}
