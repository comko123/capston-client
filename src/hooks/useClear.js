import { clearStyle } from "../store"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
export const useClear = () => {
    const dispatch = useDispatch()
    useEffect(() => { dispatch(clearStyle("no2")) }, [dispatch])
}