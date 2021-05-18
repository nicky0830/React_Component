import './App.css';




function Header(props){ 
  return(
    <div className = "header"> 
     <div className = "mypage">MY PAGE</div>
     <div className = "button">
     <button className = "b1">{props.button1}</button>
     <button className = "b1">{props.button2}</button>
     </div>
     
    </div>
  )
}


function Body(props){ 
    return( 
      <div className = "body">
        <div className = "title">
        <h1>HELLO, I'M {props.name}</h1>
        </div>
        
        <div className = "me"> 
        <span className = "span">ABOUT ME</span>
        <div className = "content">
        <p>제 전공은 {props.major}이고</p>
        <p>제 취미는 {props.hobby}입니다</p>
        <p>제 MBTI는 {props.mbti}이고</p>
        <p>좋아하는 가수는 {props.singer}입니다</p>
        <p>코딩 시작한지는 얼마 안 되었지만 백엔드보다 프론트엔드가 재밌어서</p>
        <p>React, JS 위주로 공부 중입니다 </p>
         앞으로 잘 부탁해요 :)
         </div>
         </div>

      </div>
  )

}

function Footer(props){ 
    return(
      <div className = "footer">
        reach me at
        <p>{props.email}</p>
        <p>{props.number}</p>
      </div>
      
    )
  }
  



function App() {
  return (
    <div className="App">
      <Header button1 = "로그인" button2 = "회원가입"/>
      <Body name = "곽나경" major = "영문과" hobby = "영화감상" mbti = "ENFP" singer = "검정치마, 잔나비 등 밴드"/>
      <Footer email = "kwaknicky@naver.com" number = "01099737057"/>
    </div>
  );
}

export default App;
