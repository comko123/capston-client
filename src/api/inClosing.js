import {createApi, fetchBaseQuery }from '@reduxjs/toolkit/query/react'
export const inCloser = createApi({
    reducerPath:"infoModify",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:8080"}),
    tegTypes:["test"],
    endpoints:({mutation,query})=>({
    GetBorder:query({
    query:({url})=>url,
    providesTags:(result,error,args)=>[{type:"test",id:args.name}]
}),    
    SetMyInfo:mutation({query:({token,info})=>{
    return {
    url:"/my-style",method:'post',headers:token,
    body:{styleList:info},
    responseHandler: (response) => response.text()}},
    invalidataestTags:({name})=>[{type:'test',name}]}),
    SetStyleInfo:mutation({query:({token,info})=>{
    return {
    url:`/my-clothes`,method:'post',headers:token,
    body:{seasonList:info},
    responseHandler: (response) => response.text()}}, 
    invalidataestTags:({name})=>[{type:'test',name}]})})})

    export const {useGetBorderQuery,useSetMyInfoMutation,useSetStyleInfoMutation} = inCloser