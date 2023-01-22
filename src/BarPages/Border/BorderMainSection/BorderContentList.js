/*eslint-disable*/
import { Link } from "react-router-dom"
import React from "react"
const BorderContentList = ({currentData,pageIndex}) => {
      return(<>{!currentData.length?<div className="noData">
      <h4 className="noContent">게시글이 없습니다.</h4></div>
      :currentData.map(({id,title,content},index)=>{if(pageIndex === Math.floor(index/10)){
      return (<div className="list_area" key={id}>
      <h3 className="border_nickname">{title}</h3>
      <div className="list"><Link className="list_link"
      to={`/detail/${index}/comment/${id}`}>{content}
      </Link></div><div className="borderHR"/></div>)}})}</>)}
export default React.memo(BorderContentList)