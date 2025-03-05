import React from 'react'
import "./Navigation.css"

export default function Navigation() {
  return (
    <nav>
      <ul id='menu'>
        <li>
          <p>Demos <i className="bi bi-chevron-down"></i></p>
        </li>
        <li>
          <p>Post <i className="bi bi-chevron-down"></i></p>
          <div id="subMenu">
            <ul>
              <li>
                <a href='#'>Post Header</a>
                <i className="bi bi-chevron-right"></i>
              </li>
              <li>
                <a href='#'>Post Layout</a>
                <i className="bi bi-chevron-right"></i>
              </li>
              <li>
                <a href='#'>Share Buttons</a>
                <i className="bi bi-chevron-right"></i>
              </li>
              <li>
                <a href='#'>Gallery Post</a>
                <i className="bi bi-chevron-right"></i>
              </li>
              <li>
                <a href='#'>Video Post</a>
                <i className="bi bi-chevron-right"></i>
              </li>
            </ul>
          </div> 
        </li>
        <li>
          <p>Features <i className="bi bi-chevron-down"></i></p>
        </li>
        <li>
          <p>Categories <i className="bi bi-chevron-down"></i></p>
        </li>
        <li>
          <p>Shop <i className="bi bi-chevron-down"></i></p>
        </li>
        <li>
          <p>Buy Now</p>
        </li>
      </ul>
    </nav>
  )
}