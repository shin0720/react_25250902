import React from 'react'
const siteText =[
    {
        text:["make","site compliant with","JoHyenHo"],
        title:"1차 포트폴리오",
        code:"https://www.naver.com/",
        view:"/",
        info:["site coding","제작 기간 : 3일","프로그램 : html5, css3, javascript, react 등"],
    },
    {
        text:["make2","site compliant with2","JoHyenHo2"],
        title:"2차 포트폴리오",
        code:"https://www.daum.net/",
        view:"/",
        info:["site coding2","제작 기간 : 3일2","프로그램 : html5, css3, javascript, react 등2"],
    },
    {
        text:["make3","site compliant with3","JoHyenHo3"],
        title:"3차 포트폴리오",
        code:"/",
        view:"/",
        info:["site coding3","제작 기간 : 3일3","프로그램 : html5, css3, javascript, react 등3"],
    },
    {
        text:["make4","site compliant with4","JoHyenHo4"],
        title:"4차 포트폴리오",
        code:"/",
        view:"/",
        info:["site coding4","제작 기간 : 3일4","프로그램 : html5, css3, javascript, react 등4"],
    },
    {
        text:["make5","site compliant with5","JoHyenHo5"],
        title:"5차 포트폴리오",
        code:"/",
        view:"/",
        info:["site coding5","제작 기간 : 3일5","프로그램 : html5, css3, javascript, react 등5"],
    },
    {
        text:["make5","site compliant with5","JoHyenHo5"],
        title:"5차 포트폴리오",
        code:"/",
        view:"/",
        info:["site coding5","제작 기간 : 3일5","프로그램 : html5, css3, javascript, react 등5"],
    },
    
]


const Site = () => {
    return (
        <section id='site'>
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
                                <a href={site.code}>code</a>
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