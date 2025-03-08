import React, { useContext, useState } from 'react'
import "./MoblieNavigation.css"
import MyContext from '../../Context/context'
import classNames from 'classnames'

export default function MobileNavigation() {
  const value = useContext(MyContext)
  const [isSubMobileListOpen, setIsSubMobileListOpen] = useState(false)
  const openSubMobileList = (e)=>{
    if(e === value.menu[1]){
      setIsSubMobileListOpen(!isSubMobileListOpen)
    }
  }  
  return (
    <div className='modalMobileNavigation'>
      <div className="MobileNavigation">
        <img src="Logo.png" alt="logo"/>
        <nav className='mobileMenu'>
          <ul className='mobileList'>
            {
              value.menu?.map((elem,index)=>{
                return(
                  <li key={index}  onClick={()=>openSubMobileList(elem)}>
                    <p>{elem}</p>
                    {
                      elem !== "Buy Now" ?
                      <i className="bi bi-chevron-down"></i>
                      :null
                    }
                    {
                      elem == "Post" ? 
                      <div className={classNames("subMobileList",{"active": isSubMobileListOpen})}>
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
      </div>
    </div>
  )
}
