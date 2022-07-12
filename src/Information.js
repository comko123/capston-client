import MenuBar from "./Bar/MenuBar";
export default function Information (){
  
    
    return (<>
    <h3>내정보 수정</h3> 
    <h5>마이페이지&gt;내정보 수정하기</h5>
    <>
<h1>봄</h1> <input type = "button" value = "제출"/><br/>
청바지 <input type = "checkbox" value = "spring-jeans"/>
<br/>
맨투맨 <input type = "checkbox" value = "spring-pullover"/>
<br/>
셔츠/블라우스 <input type = "checkbox" value = "spring-shirt"/>
<br/>
후드티 <input type = "checkbox" value = "spring-hoodie"/>
<br/>
가디건 <input type = "checkbox" value = "spring-Cardigan"/>
</>
<br/>
<>
<h1>여름</h1> <input type = "button" value = "제출"/><br/>
반바지 <input type = "checkbox" value = "summer-shorts"/>
<br/>
반팔티셔츠 <input type = "checkbox" value = "summer-shortsleeve"/>
<br/>
셔츠/블라우스 <input type = "checkbox" value = "summer-shirt"/>
<br/>
민소매티셔츠 <input type = "checkbox" value = "summer-Sleeveless"/>
<br/>
청바지 <input type = "checkbox" value = "summer-jeans"/>
</>
<br/>
<>
<h1>가을</h1> <input type = "button" value = "제출"/><br/>
청바지 <input type = "checkbox" value = "fall-jeans"/>
<br/>
맨투맨 <input type = "checkbox" value = "fall-pullover"/>
<br/>
셔츠/블라우스 <input type = "checkbox" value = "fall-shirt"/>
<br/>
후드티 <input type = "checkbox" value = "fall-hoodie"/>
<br/>
니트/스웨터 <input type = "checkbox" value = "fall-Cardigan"/>
</>
<br/>
<>
<h1>겨울</h1> <input type = "button" value = "제출"/><br/>
청바지 <input type = "checkbox" value = "winter-jeans"/>
<br/>
코트 <input type = "checkbox" value = "winter-coat"/>
<br/>
패딩 <input type = "checkbox" value = "winter-padding"/>
<br/>
후드티 <input type = "checkbox" value = "winter-hoodie"/>
<br/>
니트/스웨터 <input type = "checkbox" value = "winter-knit"/>
</>
<br/>
<>
<h1>스타일</h1> <input type = "button" value = "제출"/><br/>
빈티지 <input type = "checkbox" value = "vintage"/>
<br/>
댄디 <input type = "checkbox" value = "dandy"/>
<br/>
캐주얼 <input type = "checkbox" value = "casual"/>
<br/>
놈코어 <input type = "checkbox" value = "normcore"/>
<br/>
스트릿 <input type = "checkbox" value = "street"/>
</>
<>
<h1>비밀번호 변경</h1>
현재 비밀번호&nbsp;<input type="password" />
<br/><br/>
새로운 비밀번호<input type="password"/>
<br/><br/>
새로운 비밀번호 <input type="password"/><br/>
확인
<br/>
<input type = "button" value = "비밀번호 수정"/>
<br/>
</>
<br/>
<MenuBar/>
    </>
    )

    
}

