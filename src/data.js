export const wheather = JSON.parse(sessionStorage.getItem("wheatherInfo"))
export const userLoginInfo = JSON.parse(sessionStorage.getItem("login_information"))
export const certifiedToken = JSON.parse(sessionStorage.getItem("login_information"))?.token
export const selectUserCheck= {스타일:["스트릿","댄디","캐주얼","빈티지","놈코어"]}
export const inputTypeAndPalcehorder = {email:["text","E-mail"],password:["password","비밀번호"]}

export const infoUser = {
봄:["니트/스웨터","맨투맨","셔츠/블라우스","후드티","가디건"],
여름:["반팔 티셔츠","셔츠/블라우스","민소매 티셔츠","반바지","청바지"],
가을:["청바지","맨투맨","셔츠/블라우스","후드티","니트/스웨터"],
겨울:["청바지","코트","패딩","후드티","니트/스웨터"]}

export const selectUserData = {
연령: ["10 ~ 19세","20 ~ 29세","30 ~ 39세","40 ~ 49세","50세 이상"],
성별:["남성","여성"],
신장: ["156 ~ 160cm","160 ~ 165cm","165 ~ 170cm","170 ~ 175cm","175이상"],
체중: ["45 ~ 55kg","56 ~ 65kg","66 ~ 75kg","76 ~ 85kg","85kg 이상"]}

export class ruby {
constructor(lowTemp,highTemp){
this.lowTemp = lowTemp
this.highTemp = highTemp}}

export class selectDataParse{
constructor(seasonName,nameList){
this.seasonName=seasonName
this.nameList=nameList}}

export class infotomyinfo{
constructor(...rest){
this.lowTemp=rest[0]
this.highTemp=rest[1]
this.gender=rest[2]}}

export class signInfo {
constructor(...rest){
this.username = rest[0]
this.password = rest[1]
this.gender = rest[2]
this.age = rest[3]
this.height = rest[4]
this.weight = rest[5]
this.styleList = rest[6]}}

export class listText {
constructor(title,content){
this.title = title
this.content = content}}

export class articles {
constructor(nickname,body){
this.nickname=nickname
this.body=body}}  

export class changePassword {
constructor(email,password,newPassword){
this.username = email
this.password = password
this.newPassword = newPassword}}  

export class login {
constructor(email, password) {
this.username = email
this.password = password}}

export const parsingLogic = (setState,result) => {try {setState(JSON.parse(result))} catch {setState(result)}}