import React, { useState } from 'react'

const headerNav =[
  {
    title: 'intro',
    url: '#intro',
  },
  {
    title: 'skill',
    url: '#skill',
  },
  {
    title: 'site',
    url: '#site',
  },
  {
    title: 'port',
    url: '#port',
  },
  {
    title: 'contact',
    url: '#contact',
  },
]


const Header = () => {

  const [show,setShow] = useState(false);
  const toggleMenu =()=>{
    setShow((pshow) => !pshow);

  }

  return (
    <header id='header' role='banner'>
      <div className="header_inner">
        <div className="header_logo">
          <a href="/">
            PORTFOLIO <em>react</em>
          </a>
        </div>
        <nav className={`header_nav ${show ? "show": ""}`} role='navigation' aria-label='메인800이상'>
          <ul>
            {headerNav.map((nav,key)=>(
            <li key={key}><a href={nav.url}>{nav.title}</a></li>
            ))}


            {/* <li><a href="#intro">intro</a></li>
            <li><a href="#skill">skill</a></li>
            <li><a href="#site">site</a></li>
            <li><a href="#port">portfolio</a></li>
            <li><a href="#contact">contact</a></li> */}

          </ul>
        </nav>
        <nav
        className='header_mobnav'
        id='header_Toggle'
        aria-expanded={show ? "true" : "false"}
        role='button'
        tabIndex="0"
        onClick={toggleMenu}
        >
          <span></span>
        </nav>
      </div>
    </header>
  )
}

export default Header