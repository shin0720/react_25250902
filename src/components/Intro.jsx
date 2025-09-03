import React from 'react'

import img_m from "../assets/img/img.png"
const introText ={
    title:"port developer",
    desc: ["Age is","no guarantee of"," maturity."]
    // desc 는 배열로 처리
  }
  


const Intro = () => {
  return (
    <section id='intro'>
      <div className="intro_inner">
        <h1 className="intro_title">
          {introText.title}
        </h1>
        <div className="intro_lines">
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>

        </div>
        <div className="intro_text">
          <div className="text">
            <div>{introText.desc[0]}</div>
            <div>{introText.desc[1]}</div>
            <div>{introText.desc[2]}</div>
          </div>
          <div className="img">
            <img src={img_m} alt="메인 이미지" />
          </div>
        </div>
        <div className="intro_lines bottom">
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
        </div>
      </div>

    </section>
  )
}

export default Intro