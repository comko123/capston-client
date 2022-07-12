import MenuBar from "./Bar/MenuBar";
const Myadress = () => {

    return(
<>
<h3>자신의옷 등록하기</h3>
<h5>마이페이지&gt;자신의옷 등록하기</h5>
<>
<h1>봄</h1>
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
<h1>여름</h1>
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
<h1>가을</h1>
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
<h1>겨울</h1>
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
<h1>스타일</h1>
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
<MenuBar/>
</>

    )

}
export default Myadress;