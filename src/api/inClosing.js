import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const parse = { responseHandler: (response) => response.text() }
const inval = { invalidataestTags: ({ name }) => [{ type: 'test', name }] }
const provi = { providesTags: (args) => [{ type: "test", id: args.name }] }
export const inCloser = createApi({
    reducerPath: "infoModify", baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }), tegTypes: ["test"],
    endpoints: ({ mutation, query }) => ({
        GetBorderSearchArticles: query({ query: ({ info, num }) => `/articles/title/${info}?size=10&page=${num}`, ...provi }),
        GetWheather: query({ query: ({ latitude, longitude, state }) => `https://api.openweathermap.org/data/2.5/${state}?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WHEATHER_API_KEY}&units=metric`, ...provi }),
        GetArticleInfo: query({ query: (id) => `/articles/${id}`, ...provi }),
        GetComment: query({ query: (id) => `/articles/${id}/comments`, ...provi }),
        GetBorder: query({ query: ({ url }) => url, ...provi }),
        SetMyInfo: mutation({ query: ({ token, info }) => { return { url: "/my-style", method: 'post', headers: token, body: { styleList: info }, ...parse } }, ...inval }),
        SetStyleInfo: mutation({ query: ({ token, info }) => { return { url: `/my-clothes`, method: 'post', headers: token, body: { seasonList: info }, ...parse } }, ...inval }),
        SetLoginState: mutation({ query: (loginInfo) => { return { url: "/login", method: 'post', headers: { token: "" }, body: { ...loginInfo } } }, ...inval }),
        SetSignUpState: mutation({ query: (signUpInfo) => { return { url: "/join", method: 'post', body: { ...signUpInfo }, ...parse } }, ...inval }),
        SetPasswordModify: mutation({ query: (passwordInfo) => { return { url: "/change-password", method: 'post', body: { ...passwordInfo }, ...parse } }, ...inval }),
        SetCommentInput: mutation({ query: ({ info, num }) => { return { url: `/articles/${num}/comment/new`, method: 'post', body: { ...info }, ...parse } }, ...inval }),
        SetArticleInput: mutation({ query: inputArticleInfo => { return { url: `/articles/new`, method: 'post', body: { ...inputArticleInfo }, ...parse } }, ...inval }),
        SetUnLoginImp: mutation({ query: user => { return { url: `/suggest1-non-member`, method: 'post', body: { ...user } } }, ...inval }),
        SetLoginImp: mutation({ query: ({ token, info, url }) => { return { url, method: 'post', headers: token, body: { ...info } } }, ...inval })
    })
})