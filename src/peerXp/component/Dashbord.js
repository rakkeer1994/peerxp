
import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Charts from 'react-apexcharts'
import TopFivePosts from './Top5'
const Dashbord=()=>{

    const [tages,setTages]=useState([])
    const [post,setPost]= useState([])
    const [pages,setPages]=useState([])
    const [authers,setAuthers]=useState([])
      useEffect(()=>{
        axios.get("https://ghost-blog.ipxp.in/ghost/api/v3/content/tags/?key=8196190b08906dda0ebf6e6f5d").then((res)=>{setTages(res.data.tags)})
        axios.get("https://ghost-blog.ipxp.in/ghost/api/v3/content/posts/?key=8196190b08906dda0ebf6e6f5d").then((res)=>{setPost(res.data.posts)})
        axios.get("https://ghost-blog.ipxp.in/ghost/api/v3/content/pages/?key=8196190b08906dda0ebf6e6f5d").then((res)=>{setPages(res.data.pages)})
        axios.get("https://ghost-blog.ipxp.in/ghost/api/v3/content/authors/?key=8196190b08906dda0ebf6e6f5d").then((res)=>{setAuthers(res.data.authors)})
       
      },[])
      
    return(
        <>
        <div>
        <h1>List of Records</h1>

        <p>Total Number of Post: {post.length}</p>
        <p>Total Number of Pages: {pages.length}</p>
        <p>Total Number of Tages: {tages.length}</p>
        <p>Total Number of Authers: {authers.length}</p> 
        </div>
      
       <div className='chartDiv'>
       <Charts 
        type="bar"
        width={300}
        height={400}
        series={[
            {name:"total post",
        data:[2,4,2,5,6,2,6,3,4,4,8,1]}
        ]}
        options={{
            title:{text:"posts per month",style:{fontSize:30}},
            xaxis:{categories:["jan","feb","march","april","may","june", "july","aug","sept","oct","nov","dec"],
                    title:{text:"Months"} },
 
        }}
        >
        </Charts>
        </div>
        <div className='topPostDiv'>
             <TopFivePosts/>
        </div>
        </>
    )
}

export default Dashbord