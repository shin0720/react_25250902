
const Link = () => {

document.querySelectorAll('a[href^="#"]').forEach((el)=>{
    el.addEventListener("click",function(e){
        e.preventDefault();

        const tagerId = this.getAttribute("href");
        //네비게이션에서 site를 클릭했을때 site의 id값을 tagerId에 넣어줌
        const tagerElement = document.querySelector(tagerId);

        if(tagerElement){
            tagerElement.scrollIntoView({behavior:"smooth"})
        }
    })
});
}

export default Link
// 'a[href^="#"]' : a태그 주에서 href 다음에 #으로 시작하는 아이를 찾을거야
// 여기서 el 은 'a[href^="#"]'  이거임