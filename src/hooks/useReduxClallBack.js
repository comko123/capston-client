/*eslint-disable*/ 
import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { addStyle, deduplicationStyle, removeStyle } from "../store"
export const useReduxClallBack = ({list,value,index}) => {
const dispatch = useDispatch()
const action = {list,value,index:index}
const addStyleDispatch = useCallback(()=>{dispatch(addStyle(action))},[action,dispatch])
const deduplicationStyleDispatch = useCallback(()=>{dispatch(deduplicationStyle(action))},[action,dispatch])
const removeStyleDispatch = useCallback(()=>{dispatch(removeStyle(action))},[action,dispatch])
return {add:addStyleDispatch,dpc:deduplicationStyleDispatch,rmv:removeStyleDispatch}}