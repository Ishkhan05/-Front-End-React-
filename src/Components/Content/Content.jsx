import React, { useContext } from 'react'
import MyContext from '../../Context/context'
import "./Content.css"

export default function Content() {
  const value = useContext(MyContext)
  const postInfo = (title)=>{
    value.setPostInfoModal(!value.postInfoModal)
    value.setCurrentPost(value.posts.find((elem)=>elem.title == title))
  }
  const modalClose = (e) =>{
    e.target.className=="modal" ? value.setPostInfoModal(false): null 
  }
  return (
    <div className='Content'>
      {
        value.posts?.map(post=>{
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
      {value.postInfoModal? (
        <div className='modal' onClick={modalClose}>
          <div className='postInfo'>
            <picture>
              <source media="(min-width:1080px)" srcSet={value.currentPost.img_2x} />
              <source media="(min-width:465px)" srcSet={value.currentPost.img} />
              <img src={value.currentPost.img_2x} alt={value.currentPost.name} style={{ width: "auto" }} />
            </picture>
            <p>{value.currentPost.tags}</p>
            <h2>{value.currentPost.title}</h2>
            <div>
              <p>{value.currentPost.autor}</p>
              <p>{value.currentPost.date}</p>
              <p>{value.currentPost.views}</p>
            </div>
            <p>{value.currentPost.text}</p>
          </div>
        </div>) 
        :null
      }
    </div>
  )
}
