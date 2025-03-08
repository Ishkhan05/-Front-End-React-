import React, { useContext }  from 'react'
import MyContext from '../../Context/context'
import "./SearchPosts.css"

export default function SearchPosts() {
  const value = useContext(MyContext)
  const searchedPosts = value.posts?.filter((elem)=>{
    const text = value.text.toLowerCase()
    const autor = elem.autor ? elem.autor.toLowerCase() : "" 
    const title = elem.title ? elem.title.toLowerCase() : "" 
    const tags = elem.tags ? elem.tags.toLowerCase() : "" 
    return (
      autor.concat(title, tags).includes(text)
    )
  })
  const postInfo = (title)=>{
    value.setPostInfoModal(!value.postInfoModal)
    value.setCurrentPost(value.posts.find((elem)=>elem.title == title))
    value.setStartSearching(false)
    value.setIsSearch(false)
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
