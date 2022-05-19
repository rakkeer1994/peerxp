import axios from 'axios'
import React, { useEffect,useState } from 'react'
import './top5.css'

const TopFivePosts = () => {
    const [topPost,SetTopPOst]=useState([]);
    useEffect(()=>{
        axios.get("https://ghost-blog.ipxp.in/ghost/api/v3/content/posts/?key=8196190b08906dda0ebf6e6f5d").then(response=>{
                     SetTopPOst(response.data.posts)
   })
    },[])
    
  return (
      <div>
          <h2 className='Header'>Top-5-Post</h2>
    <div className='topPosts'>
    <div>
      {
        topPost.filter((result)=>result.id==="613c9d70a3e4b056473cd1a3").map((result)=>
           <div>
            <a href='https://ghost-blog.ipxp.in/different-product-deployment-strategies-in-devops/' ><img className='top5Image' src={result.feature_image} alt=""/></a>
           </div>
        )
      }
  </div>
  <div>
      {
        topPost.filter((result)=>result.id==="613c9d70a3e4b056473cd1a2").map((result)=>
           <div>
            <a href='https://ghost-blog.ipxp.in/centos-8-end-of-life-in-2021/' ><img className='top5Image' src={result.feature_image} alt=""/></a>
           </div>
        )
      }
  </div>
  <div>
      {
        topPost.filter((result)=>result.id==="613c9d70a3e4b056473cd1a1").map((result)=>
           <div>
            <a href='https://ghost-blog.ipxp.in/all-you-need-to-know-about-blue-green-deployments/' ><img className='top5Image' src={result.feature_image} alt=""/></a>
           </div>
        )
      }
  </div>
  <div>
      {
        topPost.filter((result)=>result.id==="613c9d70a3e4b056473cd19f").map((result)=>
           <div>
            <a href='https://ghost-blog.ipxp.in/continuous-integration-continuous-deployment-continuous-delivery/' ><img className='top5Image' src={result.feature_image} alt=""/></a>
           </div>
        )
      }
  </div>
  <div>
      {
        topPost.filter((result)=>result.id==="613c9d70a3e4b056473cd19c").map((result)=>
           <div>
            <a href='https://ghost-blog.ipxp.in/the-11-rules-of-gitlab-flow/' ><img className='top5Image' src={result.feature_image} alt=""/></a>
           </div>
        )
      }
  </div>
  </div>
  </div>
  )
}

export default TopFivePosts
