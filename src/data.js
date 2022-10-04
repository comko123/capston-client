export const infoUser = {
    봄:["청바지","맨투맨","셔츠/블라우스","후드티","가디건"],
    여름:["반바지","반팔 티셔츠","셔츠/블라우스","민소매티셔츠","청바지"],
    가을:["청바지","맨투맨","셔츠/블라우스","후드티","니트/스웨터"],
    겨울:["청바지","코트","패딩","후드티","니트/스웨터"],
    스타일:["빈티지","댄디","캐주얼","놈코어","스트릿"]
}

export const selectUserData = {
    연령: ["10 ~ 19세","20 ~ 29세","30 ~ 39세","40 ~ 49세","50세 이상"],
    성별:["남자","여자"],
    신장: ["156 ~ 160cm","160 ~ 165cm","165 ~ 170cm","170 ~ 175cm","175이상"],
    체중: ["45 ~ 55kg","56 ~ 65kg","66 ~ 75kg","76 ~ 85kg","85kg 이상"]
  }

  export const inputTypeAndPalcehorder = {
     닉네임:["text","닉네임"],
     id:["text","ID"],
     email:["text","E-mail"],
     password:["password","비밀번호"],
     password2:["password","비밀번호 확인"]
  }

  const current_date = new Date()
  const join_month = current_date.getMonth()+1
  const getDate = current_date.getFullYear()+"년 "
  +join_month+"월 "
  +current_date.getDate()+"일 "
  +current_date.getHours()+"시 "
  +current_date.getMinutes()+"분"
  
  export class signUpData {
    constructor(...rest){
      this.userId=rest[0]
      this.password=rest[1]
      this.passoerdConfirm=rest[2]
      this.email=rest[3]
      this.nickname=rest[4]
      this.gender=rest[5]
      this.age=rest[6]
      this.height=rest[7]
      this.weight=rest[8]
      this.status="Y"
      this.category=120
      this.dropDate=0
      this.id=null
      this.regDate=getDate 
    }
}

export class infotomyinfo{
  constructor(...rest){
    this.lowTemp=rest[0]
    this.highTemp=rest[1]
    this.gender=rest[2]
  }
}
export const userClothingRegistration = {spring:[],summer:[],fall:[],winter:[],style:[]}
export const userClothingModify = {springObj:{spring:[]},summerObj:{summer:[]},fallObj:{fall:[]},winterObj:{winter:[]},styleObj:{style:[]}}
export const userSelect = {성별:[],연령:[],신장:[],체중:[]}
export const userClientInput = {id:[],email:[],password:[],password2:[],nickname:[]}
export const wheather = JSON.parse(sessionStorage.getItem("wheatherInfo"))
export const userLoginInfo = JSON.parse(sessionStorage.getItem("login_information"))
export const imgListToSever = JSON.parse(sessionStorage.getItem("imgList"))
export const no1Data = {
  login_information:userLoginInfo?.gender,
  imgList:imgListToSever,
  img_list:false,
  gender:sessionStorage.getItem("gender")
}