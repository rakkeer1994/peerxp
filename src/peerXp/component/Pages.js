import React,{useEffect,useState} from 'react'
import axios from 'axios'
const Pages=()=>{
    
    
    const [pages,setPages]=useState([])
    const [notMeta,setNotMeta]=useState([])
    const [url,setUrl]=useState([])
    useEffect(()=>{
        axios.get("https://ghost-blog.ipxp.in/ghost/api/v3/content/posts/?key=8196190b08906dda0ebf6e6f5d").then((res)=>{setPages(res.data.posts)})
    },[])
    
    // console.log(url)
    useEffect(()=>{
        pages.forEach((val,i)=>{
            if(val.meta_description===null){
                // console.log(val.title)
                setNotMeta(i+1)
            }
        })
       let retVal= pages.filter((val)=>{
            return val.url.length>75
        })
        console.log(retVal)
        retVal.forEach((val)=>{
            // console.log("filtered", val.url)
            setUrl(val)
        })
        // console.log("finally", url)
        
    },[])
    return(
        <>
        <p>List of post without meta description:{notMeta}</p>
        <p>List of posts of featured image:{notMeta}</p>
         <p>List of Too long Url:{url.length}</p>
         {url.map((val)=>{
             return <a>{val.url}</a>
         })}
        </>
    )
}

export default Pages