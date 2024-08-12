import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import home from "./Home.module.css"

const Home = () => {
  let [players,setPlayers]=useState([])
let navigate=useNavigate()

useEffect(()=>{
  let playerData=async ()=>{
    let {data}= await axios.get("http://localhost:3000/players")
    setPlayers(data)
  }
playerData()
},[])
let handleRegister=()=>{
  navigate("/create")
}
let handleDelete=(id)=>{
 axios.delete(`http://localhost:3000/players/${id}`)
 location.reload()
}

  let [dark,setDark]=useState(false)
  let handleDarkMode=()=>{
      setDark(!dark)
  }

  return (
    <>
    <button onClick={handleRegister} className={home.button}>REGISTER</button>
    <button onClick={handleDarkMode} className={dark?home.btn:home.nbt} id={home.btn}>{dark?"LIGHT":"DARK"}</button>
    <table border={10} style={{width:"100%"}} cellPadding={20} id={home.table} className={dark?home.Table:home.light} >  
<thead id={home.head} className={dark?home.para:home.sara}>
<tr className={dark?home.para:home.sara}>
  <th id={home.id} className={dark?home.Id:home.sara}>ID</th>
  <th id={home.name} className={dark?home.Name:home.sara}>NAME</th>
  <th id={home.cnt} className={dark?home.Cnt:home.sara}>COUNTRY</th>
  <th id={home.db} className={dark?home.Db:home.sara}>DEBUT</th>
  <th id={home.odi} className={dark?home.Odi:home.sara}>RUNS(ODI)</th>
  <th id={home.tests} className={dark?home.Tests:home.sara}>RUNS(TESTS)</th>
  <th id={home.tt} className={dark?home.Tt:home.sara}>RUNS(T20)</th>
  <th id={home.PHOTO} className={dark?home.photo:home.sara}>PHOTO</th>
  </tr>
</thead>
<tbody  className={dark?home.para:home.sara}>
  {
  players==null?"loading..":players.map((ele)=>{
    return(
      <Fragment key={ele.id}>
      <tr>
       <td className={dark?home.para:home.sara}>{ele.id}</td>
       <td className={dark?home.para:home.sara}>{ele.name}</td>
       <td className={dark?home.para:home.sara}>{ele.country}</td>
       <td className={dark?home.para:home.sara}>{ele.debut}</td>
       <td className={dark?home.para:home.sara}>{ele.ODI}</td>
       <td className={dark?home.para:home.sara}>{ele.TESTS}</td>
       <td className={dark?home.para:home.sara}>{ele.T20}</td>
      
       <td className={dark?home.para:home.sara}>
        <button onClick={()=>{
          navigate(`/read/${ele.id}`)
        }}  className={dark?home.para:home.sara}>READ</button>
       </td>
       <td className={dark?home.para:home.sara}>
        <button onClick={()=>{
          navigate(`/edit/${ele.id}`)
        }}  className={dark?home.para:home.sara}>EDIT</button>
       </td>
       <td className={dark?home.para:home.sara}>
        <button onClick={()=>handleDelete(ele.id)} className={dark?home.Dark:home.sara} >DELETE</button>
       </td>
       <td className={dark?home.para:home.sara}>
        <img src={ele.image} id={home.img} alt=""  />
       </td>
      </tr>
      </Fragment>
    )
  })
}
</tbody>
    </table>
    </>
  )
}

export default Home