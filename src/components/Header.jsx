import React, { useState } from 'react'

const headerNav=[
  {
    title: "intro",
    url: "#intro",
  },
  {
    title: "skill",
    url: "#skill",
  },
  {
    title: "site",
    url: "#site",
  },
  {
    title: "portfolio",
    url: "#port",
  },
  {
    title: "contact",
    url: "#contact",
  },
  {
    title: "more",
    url: "#more",
  },
]



const Header = () => {

  const[show,setShow] = useState(false);
  // useState(): 훅 명령어의 하나로 컴포넌트의 상태를 관리한는 명령어로 상태가 변경이 도디면 스스로 업데이트를 해주는 명령어
  //show: 상태 변수, setShow: 상태를 변경하는 함수
  const toggleMnu =() => {
    setShow((pshow) => !pshow);
  }



  return (
    <header id='header' role='banner'>
      <div className='header_inner'>
        <div className="header_logo">
          <a href="/">portfolio <em>react</em></a>
        </div>
        <nav className={`header_nav ${show ? "show":""}`} role='navigation' aria-label='메인메뉴'>
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
        <nav className='header_mnav' id='headerToggle' role='button' aria-controls='햄버거메뉴' tabIndex={0} aria-expanded={show ? "true" : "false"} onClick={toggleMnu}>
          <span></span>
        </nav>
      </div>
    </header>
  )
}

export default Header