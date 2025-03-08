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
    e.target.className=="modal" ? value.setPostInfoModal(false) : "" 
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
                <img src={post.img_2x} alt={post.name}/>
              </picture>
              <div className='postHeading'>
                <h5>{post.tags}</h5>
                <h2>{post.title}</h2>
              </div>
              <div className='postInfo'>
                <p className='postAutor'>{post.autor}</p>
                <span></span>
                <p>{post.date}</p>
                <span></span>
                <p>{post.views}</p>
              </div>
              <p className='postDescription'>{post.text}</p>
            </div>
          )
        })
      }
      {value.postInfoModal? (
        <div className='modal' onClick={modalClose}>
          <div className='modalPost'>
            <picture>
              <source media="(min-width:1080px)" srcSet={value.currentPost.img_2x} />
              <source media="(min-width:465px)" srcSet={value.currentPost.img} />
              <img src={value.currentPost.img_2x} alt={value.currentPost.name} />
            </picture>
            <div className='modalPostHeading'>
              <h4>{value.currentPost.tags}</h4>
              <h1>{value.currentPost.title}</h1>
            </div>
            <div className='modalPostInfo'>
              <p className='modalPostAutor'>{value.currentPost.autor}</p>
              <span></span>
              <p>{value.currentPost.date}</p>
              <span></span>
              <p>{value.currentPost.views}</p>
            </div>
            <p className='modalPostDescription'>{value.currentPost.text}</p>
          </div>
        </div>) 
        :null
      }
    </div>
  )
}
