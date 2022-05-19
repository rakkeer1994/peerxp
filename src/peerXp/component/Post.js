import React,{useEffect,useState} from 'react'
import axios from 'axios'

const Post=()=>{
    const [links,setLinks]=useState([])
    useEffect(()=>{
        axios.get("https://ghost-blog.ipxp.in/ghost/api/v3/content/posts/?key=8196190b08906dda0ebf6e6f5d").then((res)=>{setLinks(res.data.posts)})
    },[])
    console.log(links)
    return(
        <>
        <h1>Total number of Links:{links.length}</h1>
        <p>List of Internal links</p>
        <div style={{width:"30vw", boxShadow:"2px 2px lightblue", margin:"2%"}}>
            {links.map((val,i)=>{
                return (
                    <>
                   <span style={{fontSize:"1.2rem",fontWeight:"bold"}}>{i+1}.</span> <a href='${val.url}'>{val.url}</a> <br></br> <hr style={{color:"lightblue"}}/>
                    </>
                )
            })}
        </div>
        </>
    )
}

export default Post