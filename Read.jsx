import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'

const Read = () => {
  let navigate=useNavigate()
  let {id}=useParams()
  let [individualData,setIndividualData]=useState("")
  let {name,debut,country,ODI,TESTS,T20,image}=individualData
  useEffect(()=>{
    let fetchData=async()=>{
      let {data}= await axios.get(`http://localhost:3000/players/${id}`)
      setIndividualData(data)
    }
   fetchData()
  },[])
  return (
    <body style={{display:'flex',justifyContent:'center',height:'100vh',width:'100vw',backgroundImage:'url(https://cdn.britannica.com/81/253981-050-03DB5D5F/Pavilion-Allen-Stand-Lords-Cricket-Ground-London-England.jpg)',height:'100vh',width:'100vw'}}>  
   
    <div style={{height:'700px',width:'700px',position:'relative',top:'35px',backgroundColor:'#454545'}}>
    <div >
    <div style={{backgroundColor:'#454545'}}> 
      <h1 style={{height:'40px',width:'500px',border:'1px solid black',display:'flex',justifyContent:'center',alignItems:'center',position:'relative',left:'100px',top:'12px',borderRadius:'5px',backgroundColor:'#d35500',fontFamily:'Gill Sans, Gill Sans MT,Calibri, Trebuchet MS, sans-serif'}}>Name:{name}</h1>
    </div>
    <div style={{backgroundColor:'#454545'}}>
      <h1 style={{height:'40px',width:'500px',border:'1px solid black',display:'flex',justifyContent:'center',alignItems:'center',position:'relative',left:'100px',top:'30px',borderRadius:'5px',backgroundColor:'#faa74a',fontFamily:'Gill Sans, Gill Sans MT,Calibri, Trebuchet MS, sans-serif'}}>Country:{country}</h1>
    </div>
    <div style={{backgroundColor:'#454545'}}>
     <h1 style={{height:'40px',width:'500px',border:'1px solid black',display:'flex',justifyContent:'center',alignItems:'center',position:'relative',left:'100px',top:'50px',borderRadius:'5px',backgroundColor:'#1abc9c',fontFamily:'Gill Sans, Gill Sans MT,Calibri, Trebuchet MS, sans-serif'}}>Debut:{debut}</h1>
    </div>
    <div style={{backgroundColor:'#454545'}}>
     <h1 style={{height:'40px',width:'500px',border:'1px solid black',display:'flex',justifyContent:'center',alignItems:'center',position:'relative',left:'100px',top:'70px',borderRadius:'5px',backgroundColor:'#4C8055',fontFamily:'Gill Sans, Gill Sans MT,Calibri, Trebuchet MS, sans-serif'}}>ODI:{ODI}</h1>
    </div>
    <div style={{backgroundColor:'#454545'}}>
     <h1 style={{height:'40px',width:'500px',border:'1px solid black',display:'flex',justifyContent:'center',alignItems:'center',position:'relative',left:'100px',top:'90px',borderRadius:'5px',backgroundColor:'#DEB887',fontFamily:'Gill Sans, Gill Sans MT,Calibri, Trebuchet MS, sans-serif'}}>TESTS:{TESTS}</h1>
    </div>
    <div style={{backgroundColor:'#454545'}}>
     <h1 style={{height:'40px',width:'500px',border:'1px solid black',display:'flex',justifyContent:'center',alignItems:'center',position:'relative',left:'100px',top:'110px',borderRadius:'5px',backgroundColor:'#00FFFF',fontFamily:'Gill Sans, Gill Sans MT,Calibri, Trebuchet MS, sans-serif'}}>T20:{T20}</h1>
    </div>
    </div>
    <div style={{position:'relative',display:'flex',justifyContent:'center',alignItems:'center',top:'130px',backgroundColor:'grey'}}>
      <img src={image} alt="" style={{height:'300px',width:'300px',filter:'drop-shadow(25px 25px 10px black)',borderRadius:'10px'}} title={name} />
    </div>
    <br /><br />
    <div style={{height:'150px',width:'150px',background:'#a28089',position:'relative',left:'1000px',bottom:'600px',padding:'40px',borderRadius:'25px'}}>
    <button style={{borderRadius:'10px',backgroundColor:'red',color:'white'}} onClick={()=>{
      navigate("/")
    }}>Go Back</button><br /><br />

<button onClick={()=>{
          navigate(`/edit/${ele.id}`)
        }}   style={{borderRadius:'10px',color:'whitesmoke',backgroundColor:'purple'}}>EDIT</button>
        
    </div>
    </div>
    </body>
  )
}

export default Read