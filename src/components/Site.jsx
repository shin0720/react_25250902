import React from 'react'

const siteText =[
  {
    text:["make","site comliant with","sinmihyeon1"],
    title:"포트폴리오",
    code:"https://www.naver.com/",
    view:"/",
    info:["site coding","제작기간: 3일","프로그램: html5, css3, javascript, react 등"],
  },
  {
    text:["make","site comliant with","sinmihyeon2"],
    title:"1차 개인포트폴리오",
    code:"/",
    view:"/",
    info:["site coding","제작기간: 3일","프로그램: html5, css3, javascript, react 등"],
  },
  {
    text:["make","site comliant with","sinmihyeon3"],
    title:"1차 팀 포트폴리오",
    code:"/",
    view:"/",
    info:["site coding","제작기간: 3일","프로그램: html5, css3, javascript, react 등"],
  },
  {
    text:["make","site comliant with","sinmihyeon4"],
    title:"2차 개인 포트폴리오",
    code:"/",
    view:"/",
    info:["site coding","제작기간: 7일","프로그램: html5, css3, javascript, react 등"],
  },
  {
    text:["make","site comliant with","sinmihyeon5"],
    title:"2차 팀 포트폴리오",
    code:"/",
    view:"/",
    info:["site coding","제작기간: 14일","프로그램: html5, css3, javascript, react 등"],
  },
  {
    text:["make","site comliant with","sinmihyeon6"],
    title:"2차 팀 포트폴리오",
    code:"/",
    view:"/",
    info:["site coding","제작기간: 14일","프로그램: html5, css3, javascript, react 등"],
  }
]

const Site = () => {
  return (
    <section id="site">
      <div className="site_inner">
      <div className="site_title">
        Site Conding <em>내 작품들</em>
      </div>
      <div className="site_wrap">


        {siteText.map((site,key)=>(
          <div className={`site_item s${key+1}`} key={key}>
          <span className='num'>{key+1}.</span>
          <div className="text">
            <div>{site.text[0]}</div>
            <div>{site.text[1]}</div>
            <div>{site.text[2]}</div>

          </div>
          <h3 className='title'>{site.title}</h3>
          <div className="btn">
            <a href={site.code} target='bank'>code</a>
            <a href={site.view}>view</a>
          </div>
          <div className="info">
            <span>{site.info[0]}</span>
            <span>{site.info[1]}</span>
            <span>{site.info[2]}</span>

          </div>
        </div>
        ))}


      </div>
      </div>
    </section>
  )
}

export default Site