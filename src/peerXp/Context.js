import React,{useEffect,useState, createContext} from 'react'
import axios from 'axios'





export const GlobalContext=createContext()
export const ContextData = (props) => {

  const [tages,setTages]=useState()
  const [post,setPost]= useState()
  const [pages,setPages]=useState()
  const [authers,setAuthers]=useState()
    useEffect(()=>{
      axios.get("https://ghost-blog.ipxp.in/ghost/api/v3/content/tags/?key=8196190b08906dda0ebf6e6f5d").then((res)=>{setTages(res.data.tages)})
      axios.get("https://ghost-blog.ipxp.in/ghost/api/v3/content/posts/?key=8196190b08906dda0ebf6e6f5d").then((res)=>{setPost(res.data.posts)})
      axios.get("https://ghost-blog.ipxp.in/ghost/api/v3/content/pages/?key=8196190b08906dda0ebf6e6f5d").then((res)=>{setPages(res.data.pages)})
      axios.get("https://ghost-blog.ipxp.in/ghost/api/v3/content/authors/?key=8196190b08906dda0ebf6e6f5d").then((res)=>{setAuthers(res.data.authors)})
    },[])
    console.log("posts", post)
    console.log("tages", tages)
    console.log("pages", pages)
    console.log("authers", authers)
  return (
    <GlobalContext.Provider value='prop' Val={{Val1:[tages,setTages],
    Val2:[post,setPost],Val3:[pages,setPages],Val4:[authers,setAuthers]}}>
        {props.children}
    </GlobalContext.Provider>
  )
}