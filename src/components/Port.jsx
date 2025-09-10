import React, { useEffect, useRef } from 'react'
import port_img1 from "../assets/img/port_1.png"
import port_img2 from "../assets/img/port_2.png"
import port_img3 from "../assets/img/port_3.png"
import port_img4 from "../assets/img/port_4.png"
import port_img5 from "../assets/img/port_5.png"
import port_img6 from "../assets/img/port_6.png"


import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



const portText = [
    {
        url:"/",
        img: port_img1,
        alt: "1차 포트폴리오 이미지",
        title: "1차 포트폴리오",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate harum distinctio reiciendis ipsum, neque iure quaerat voluptate inventore placeat at soluta ratione dicta. Omnis, nemo ullam esse quo quibusdam deserunt.",
    },
     {
        url:"/",
        img: port_img2,
        alt: "2차 포트폴리오 이미지",
        title: "2차 포트폴리오",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate harum distinctio reiciendis ipsum, neque iure quaerat voluptate inventore placeat at soluta ratione dicta. Omnis, nemo ullam esse quo quibusdam deserunt.",
    },
     {
        url:"/",
        img: port_img3,
        alt: "3차 포트폴리오 이미지",
        title: "3차 포트폴리오",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate harum distinctio reiciendis ipsum, neque iure quaerat voluptate inventore placeat at soluta ratione dicta. Omnis, nemo ullam esse quo quibusdam deserunt.",
    },
     {
        url:"/",
        img: port_img4,
        alt: "4차 포트폴리오 이미지",
        title: "4차 포트폴리오",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate harum distinctio reiciendis ipsum, neque iure quaerat voluptate inventore placeat at soluta ratione dicta. Omnis, nemo ullam esse quo quibusdam deserunt.",
    },
     {
        url:"/",
        img: port_img5,
        alt: "5차 포트폴리오 이미지",
        title: "5차 포트폴리오",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate harum distinctio reiciendis ipsum, neque iure quaerat voluptate inventore placeat at soluta ratione dicta. Omnis, nemo ullam esse quo quibusdam deserunt.",
    },
     {
        url:"/",
        img: port_img6,
        alt: "6차 포트폴리오 이미지",
        title: "6차 포트폴리오",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate harum distinctio reiciendis ipsum, neque iure quaerat voluptate inventore placeat at soluta ratione dicta. Omnis, nemo ullam esse quo quibusdam deserunt.",
    },
]

const Port = () => {

    const horizontalRef = useRef(null);
    // 초기화 시키겠다. null은 초기화
    const sectionRef = useRef([]);

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);

        const horizontal = horizontalRef.current;
        const sections = sectionRef.current;

        let scrollTween = gsap.to(sections,{
            xPercent : -120 * (sections.length - 1),
            ease: "none",
            //속도 일정하게
            scrollTrigger:{
                trigger : horizontal,
                start: "top 50px",
                end: "+=3000",
                pin: true,
                scrub: 1,

            }
        });

        return()=>{
            scrollTween.kill();
        }

     },[]);

//useEffect(()=>{}) : 랜더링할때마다 실행되는 문법
//useEffect(()=>{},[]) : 화면에 첫 렌더링될때 한번 실행
//useEffect(()=>{},[value]) : 화면에 첫 렌더링될때 한번 실행하고, 벨류값이 바뀔때 실행하는 문법


  return (
    <section id='port' ref={horizontalRef}>
        <div className="port_inner">
            <div className="port_title">
                portfolio <em>포폴 작업물</em>
            </div>
            <div className="port_wrap">

                {portText.map((port,key)=>(
                    <div className={
                        `port_iem p${key+1}`}
                        key={key}
                        ref={(el) => (sectionRef.current[key] = el)}
                        >

                    <div className="num">0{key+1}</div>
                    <a href={port.url} target='blank'rel='noreferrer' className='img'>
                    <img src={port.img} alt={port.alt} />
                    </a>
                    <h3 className='title'>{port.title}</h3>
                    <p className='desc'>{port.desc}</p>
                    <a href={port.url} target='blank' rel='noreferrer' className='site'>사이트보기</a>
                </div>
                ))}

                

            </div>

        </div>
    </section>
  )
}

export default Port
