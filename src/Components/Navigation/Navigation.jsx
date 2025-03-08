import React, { useContext } from 'react'
import MyContext from '../../Context/context'
import "./Navigation.css"

export default function Navigation() {
  const value = useContext(MyContext)
  return (
    <nav>
      <ul id='menu'>
        {
          value.menu?.map((elem,index)=>{
            return(
              <li key={index}>
                <p>{elem}</p>
                {
                  elem !== "Buy Now" ?
                  <i className="bi bi-chevron-down"></i>
                  :null
                }
                {
                  elem == "Post" ? 
                  <div id="subMenu">
                    <ul>
                      {
                        value.subMenu?.map((elem,index)=>{
                          return(
                            <li key={index}>
                              <a href='#'>{elem}</a>
                              <i className="bi bi-chevron-right"></i>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </div>
                  :null
                }
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}