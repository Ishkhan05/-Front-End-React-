import React, { useContext }  from 'react'
import MyContext from '../../Context/context'
import "./SearchPosts.css"

export default function SearchPosts() {
  const value = useContext(MyContext)
  const searchedPosts = value.posts?.filter((elem)=>{
    return (elem.autor?.toLowerCase().includes(value.text) ||
    elem.title?.toLowerCase().includes(value.text) ||
    elem.tags?.toLowerCase().includes(value.text))
  })
  const postInfo = (title)=>{
    value.setPostInfoModal(!value.postInfoModal)
    value.setCurrentPost(value.posts.find((elem)=>elem.title == title))
  }
  return (
    <div className='SearchPosts'>
      {
        searchedPosts?.map(post=>{
          return(
            <div key={post?.title} className='searchPost' onClick={()=>postInfo(post.title)}>
              <div className='rightSide'>
                <img src={post.img} alt={post.name} />
                <p>{post.tags}</p>
              </div>
              <h5>{post.title}</h5>
            </div>
          )
        })
      }
    </div>
  )
}
