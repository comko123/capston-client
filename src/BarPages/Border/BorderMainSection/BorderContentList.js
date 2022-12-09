import { Link } from "react-router-dom"
import React from "react"
const BorderContentList = ({data,pageIndex}) => {
      return(<>{!data.length?<div className="noData">
      <h4 className="noContent">게시글이 없습니다.</h4></div>
      :data.map((item,index)=>{if(pageIndex === Math.floor(index/10)){
      return (<div className="list_area" key={index}>
      <h3 className="border_nickname">{item.title}</h3>
      <div className="list"><Link className="list_link"
      to={`/detail/${index}/comment/${item.id}`}>{item.content}
      </Link></div><div className="borderHR"/></div>)}})}</>)}
export default React.memo(BorderContentList)