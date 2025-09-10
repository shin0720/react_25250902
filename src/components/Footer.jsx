import React from 'react'

const Footer = () => {
  return (
    <section id='footer' role='contentainfo'>
      <div className="footer_inner">
        <div className="footer_text">
          <span>shinmihyeon</span>
          <span>sinmihyeon@gmail.com</span>
        </div>
        <div className="footer_info">
          <div className="left">
            <div className="title">
              <a href="/">sign up</a>
            </div>
            <p>회원가입을 하시면 댓글과 게시판을 이용할 수 있습니다.</p>
          </div>
          <div className="right">
            <h3>social</h3>
            <ul>
              <li>
                <a href="/">1차 포트폴리오</a>
                <em>클릭하시면 포트폴리오를 보실수 있습니다.</em>
              </li>
              <li>
                <a href="/">2차 포트폴리오</a>
                <em>클릭하시면 포트폴리오를 보실수 있습니다.</em>
              </li>
              <li>
                <a href="/">3차 포트폴리오</a>
                <em>클릭하시면 포트폴리오를 보실수 있습니다.</em>
              </li>
              <li>
                <a href="/">4차 포트폴리오</a>
                <em>클릭하시면 포트폴리오를 보실수 있습니다.</em>
              </li>
              <li>
                <a href="/">github</a>
                <em>클릭하시면 github로 이동하여 코딩을 다운받아 보실수 있습니다.</em>
              </li>
              <li>
                <a href="/">gsap</a>
                <em>클릭하시면 gsap로 이동하여 설명을 확인해 보실수 있습니다.</em>
              </li>
              <li>
                <a href="/">react</a>
                <em>클릭하시면 react로 작성한 웹페이지로 이동하여 보실수 있습니다.</em>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_bottom">
          &copy; daifu <br />
          이사이트는 포트폴리오로 상업용으로 사용되지 않습니다. 
          <br />
          참조사이트 기입
        </div>

      </div>
    </section>
  )
}

export default Footer