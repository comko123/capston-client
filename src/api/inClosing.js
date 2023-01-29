import {createApi, fetchBaseQuery }from '@reduxjs/toolkit/query/react'

export const getProperty = (url) => {
   return {query:url,providesTags:(args)=>[{type:"test",id:args.name}]}
}
// /articles/title/${info}?size=10&page=${num}
// getProperty(query,`/articles/title/${info}?size=10&page=${num}`)
export const inCloser = createApi({
    reducerPath:"infoModify",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:8080"}),
    tegTypes:["test"],
    endpoints:({mutation,query})=>({
    GetBorderSearchArticles:query({query:({info,num})=>`/articles/title/${info}?size=10&page=${num}`,
    providesTags:(args)=>[{type:"test",id:args.name}]}),    
    GetWheather:query({query:({latitude,longitude,state})=>`https://api.openweathermap.org/data/2.5/${state}?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WHEATHER_API_KEY}&units=metric`,
    providesTags:(args)=>[{type:"test",id:args.name}]}),
    GetArticleInfo:query({query:(id)=>`/articles/${id}`,
    providesTags:(args)=>[{type:"test",id:args.name}]}),
    GetComment:query({query:(id)=>`/articles/${id}/comments`,
    providesTags:(args)=>[{type:"test",id:args.name}]}),
    GetBorder:query({query:({url})=>url,
    providesTags:(args)=>[{type:"test",id:args.name}]}),    
    SetMyInfo:mutation({query:({token,info})=>{
    return {url:"/my-style",method:'post',headers:token,body:{styleList:info},
    responseHandler: (response) => response.text()}},
    invalidataestTags:({name})=>[{type:'test',name}]}),
    SetStyleInfo:mutation({query:({token,info})=>{
    return {url:`/my-clothes`,method:'post',headers:token,body:{seasonList:info},
    responseHandler: (response) => response.text()}}, 
    invalidataestTags:({name})=>[{type:'test',name}]}),
    SetLoginState:mutation({query:(loginInfo)=>{
    return{url:"/login",method:'post',headers:{token:""},body:{...loginInfo},
    responseHandler: (response) =>response.text()}}, 
    invalidataestTags:({name})=>[{type:'test',name}]}),
    SetSignUpState:mutation({query:(signUpInfo)=>{return{
    url:"/join",method:'post',body:{...signUpInfo},
    responseHandler: (response) =>response.text()}},
    invalidataestTags:({name})=>[{type:'test',name}]}),
    SetPasswordModify: mutation({query:(passwordInfo)=>{
    return{url:"/change-password",method:'post',body:{...passwordInfo},
    responseHandler: (response) =>response.text()}},
    invalidataestTags:({name})=>[{type:'test',name}]}),
    SetCommentInput: mutation({query:({info,num})=>{
    return{url:`/articles/${num}/comment/new`,method:'post',body:{...info},
    responseHandler: (response) =>response.text()}},
    invalidataestTags:({name})=>[{type:'test',name}]}),
    SetArticleInput: mutation({query:inputArticleInfo=>{
    return{url:`/articles/new`,method:'post',body:{...inputArticleInfo},
    responseHandler: (response) =>response.text()}},
    invalidataestTags:({name})=>[{type:'test',name}]}),
    SetUnLoginImp:mutation({query:user=>{
    return {url:`/suggest1-non-member`,method:'post',body:{...user}}},
    invalidataestTags:({name})=>[{type:'test',name}]}),
    SetLoginImp:mutation({query:({token,info,url})=>{
    return {url,method:'post',headers:token,body:{...info},
    responseHandler: (response) => response.text()}},
    invalidataestTags:({name})=>[{type:'test',name}]})
})})

    export const {useGetBorderQuery,useSetMyInfoMutation,useSetSignUpStateMutation,
        useSetStyleInfoMutation,useSetLoginStateMutation,useSetPasswordModifyMutation,
        useGetCommentQuery,useSetCommentInputMutation,useGetArticleInfoQuery,
        useSetArticleInputMutation,useGetWheatherQuery,useGetBorderSearchArticlesQuery,
        useSetUnLoginImpMutation,useSetLoginImpMutation} = inCloser