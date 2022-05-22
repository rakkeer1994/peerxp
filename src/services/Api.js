import axios from 'axios'
// const URL="http://localhost:3000";
export const addUserApi=async (data)=>{
    try{
      
      // return await axios.post(`${URL}/add`, data)
      return await axios.post('https://app-crudd.herokuapp.com/add', data)
    }
    catch (err){
     console.log("error while fetching data", err)
    }
}

export const getUser=async()=>{
  try{
    // return await axios.get(`${URL}/all`)
    return await axios.get("https://app-crudd.herokuapp.com/all")
   
  }
  catch (err){
   console.log("error while fetching data", err)
  }
}

export const getUserEdit=async(id)=>{
  try{
    // https://app-crudd.herokuapp.com/all
    // return await axios.get(`${URL}/${id}`)
    return await axios.get(` https://app-crudd.herokuapp.com/${id}`)
  }
  catch (err){
   console.log("error while calling data", err)
  }
}

export const getUserEditApi=async(user,id)=>{
  try{
    // return await axios.post(`${URL}/${id}`,user)
    return await axios.post(`https://app-crudd.herokuapp.com/${id}`,user)
  }
  catch (err){
   console.log("error while editting data", err)
  }
}


export const deleteUserApi=async(id)=>{
  try{
    // return await axios.delete(`${URL}/${id}`)
    return await axios.delete(`https://app-crudd.herokuapp.com/${id}`)
  }
  catch (err){
   console.log("error while find data for delete", err)
  
  }
}