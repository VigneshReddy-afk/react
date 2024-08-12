import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
  let [individual,setIndividual]=useState({
    name:"",
    country:"",
    debut:"",
    ODI:"",
    TESTS:"",
    T20:"",
    image:""
  })
  let {id}=useParams()
  useEffect(()=>{
    let fetchData=async()=>{
      let {data}=await axios.get(`http://localhost:3000/players/${id}`)
      setIndividual(data)
    }
    fetchData()
  },[])

  let navigate=useNavigate()
let {name,country,debut,ODI,TESTS,T20,image}=individual

let handleChange=(e)=>{
  let {name,value}=e.target 
  setIndividual({...individual,[name]:value})
}

let handleUpdate = (e)=>{
  e.preventDefault()
  axios.put(`http://localhost:3000/players/${id}`,individual)
  navigate("/")
}
  return (
  <div  >
    <form onSubmit={handleUpdate} style={{display:'flex',justifyContent:'center',alignItems:'center',position:'relative',top:'50px'}}>
      <div  style={{border:'1px solid black',height:'650px',width:'500px',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'15px',backgroundColor:'#3EB489'}}>
       <div>
          <div style={{height:'50px',width:'300px',border:'1px solid green',position:'relative',top:'-165px',right:'60px',borderRadius:'15px'}}>
           <label htmlFor="name" style={{position:'relative',top:'10px',left:'35px'}}>Name:</label>
           <input type="text" name="name" id="name" value={name} onChange={handleChange} style={{position:'relative',top:'10px',left:'40px',padding:'5px'}} /><br /><br />
          </div>
          <div style={{height:'50px',width:'300px',border:'1px solid green',position:'relative',top:'-145px',right:'-60px',borderRadius:'15px'}}>  
           <label htmlFor="country" style={{position:'relative',top:'10px',left:'35px'}}>Country:</label>
           <input type="text" name="country" id="country" value={country} onChange={handleChange} style={{position:'relative',top:'10px',left:'40px',padding:'5px'}} /><br /><br />
          </div>
          <div style={{height:'50px',width:'300px',border:'1px solid green',position:'relative',top:'-125px',right:'60px',borderRadius:'15px'}}>
           <label htmlFor="debut" style={{position:'relative',top:'10px',left:'35px'}}>Debut:</label>
           <input type="text" name="debut" id="debut" value={debut} onChange={handleChange} style={{position:'relative',top:'10px',left:'40px',padding:'5px'}} /><br /><br />
          </div>
          <div style={{height:'50px',width:'300px',border:'1px solid green',position:'relative',top:'-105px',right:'-60px',borderRadius:'15px'}}>
           <label htmlFor="ODI" style={{position:'relative',top:'10px',left:'35px'}}>ODI:</label>
           <input type="text" name="ODI" id="ODI" value={ODI} onChange={handleChange} style={{position:'relative',top:'10px',left:'40px',padding:'5px'}}/><br /><br />
          </div>
          <div style={{height:'50px',width:'300px',border:'1px solid green',position:'relative',top:'-85px',right:'60px',borderRadius:'15px'}}>
           <label htmlFor="TESTS" style={{position:'relative',top:'10px',left:'35px'}}>TESTS:</label>
           <input type="text" name="TESTS" id="TESTS" value={TESTS} onChange={handleChange} style={{position:'relative',top:'10px',left:'40px',padding:'5px'}} /><br /><br />
          </div>
          <div style={{height:'50px',width:'300px',border:'1px solid green',position:'relative',top:'-55px',right:'-60px',borderRadius:'15px'}}>
           <label htmlFor="T20" style={{position:'relative',top:'10px',left:'35px'}}>T20:</label>
           <input type="text" name="T20" id="T20" value={T20} onChange={handleChange} style={{position:'relative',top:'10px',left:'40px',padding:'5px'}} /><br /><br />
           </div>
         </div>
         </div>
      
      {/* <input type="file" name='image' value={image} onChange={handleChange}/><br /><br /> */}
      {/* <img src={image} alt="" style={{height:'350px',width:'350px',position:'relative',left:'500px',top:'250px',borderRadius:'25px',animation:'',}} /> */}
   <div style={{height:'155px',width:'220px',border:'1px solid black',padding:'55px',position:'relative',right:'360px',top:'200px',borderRadius:'15px'}}>
   <div style={{position:'relative',right:'-30px',top:'-7px',borderRadius:'15px'}}>
       <input type="submit" value="update" /><br /><br />
      </div>
      <div style={{position:'relative',right:'-20px'}}>
        <button onClick={()=>navigate("/")}> GO BACK</button>
      </div>
   </div>
    </form>
  </div>
    
  )
}

export default Edit