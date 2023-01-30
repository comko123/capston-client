import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const useAlert = (result,link) => {
const navigate = useNavigate();useEffect(()=>{
if(Object.keys(result).length===2){alert(result.errorMessage)}
else if (Object.keys(result).length === 9){const {username,token,gender} = result
sessionStorage.setItem("login_information", JSON.stringify({username,token,gender}))
window.location.replace(link)}else if (typeof result === "string"){
if(!alert(result)){navigate(link)}}},[result,navigate,link])}
