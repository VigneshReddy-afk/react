import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'


const Create = () => {
 
  const formik=useFormik({
   initialValues: {
      name:"",
      country:"",
      debut:"",
      ODI:"",
      TESTS:"",
      T20:"",
      image:""
    },
    onSubmit:(playerData)=>{
axios.post("http://localhost:3000/players",playerData)

    }
})
  let {name,country,debut,ODI,TESTS,T20,image}=formik.values
  return (
  
    <div style={{display:'flex',height:'100vh',justifyContent:'center',alignItems:'center',padding:'10px', background:'linear-gradient(135deg,#71b7e6,#9b59b6)',fontFamily:'cursive'}}>
    <div className='container' style={{ maxWidth: '700px',width:'100%',background:'#fff',padding:'25px , 30px',borderRadius:'5px'}}  >
      <div className='title' style={{fontSize:'25px',fontWeight:'500px',position:'relative',background:'linear-gradient(135deg,#71b7e6,#9b59b6)' }} >Registration</div>
    <form onSubmit={formik.handleSubmit} >
      <div className='userdetails' style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
        <div className='inputbox' style={{width:'calc(100%/2-20px',margin:'20px 0 12px 0'}}>
      <label htmlFor="name" style={{fontWeight:'500',margin:'5px',display:'block',fontWeight:'16px',position:'relative',top:'-20px'}}>Name:</label>
      <input style={{height:'45px',width:'100%' ,borderRadius:'5px',border:'1px solid #ccc',position:'relative',top:'-15px'}}type="text" name='name' id='name' value={name} onChange={formik.handleChange} placeholder='Enter the name'/><br /><br />
      </div>
      <div className='inputbox'>
      <label htmlFor="country" style={{fontWeight:'500',margin:'5px',display:'block'}}>Country:</label>
      <input style={{height:'45px',width:'100%',outline:'none',borderRadius:'5px',border:'1px solid #ccc',fontWeight:'16px'}} type="text" name="country"id='country' value={country} onChange={formik.handleChange} placeholder='Country name'/><br /><br />
      </div>
      <div className='inputbox'>
      <label htmlFor="debut" style={{fontWeight:'500',margin:'5px',display:'block'}}>Debut:</label>
      <input style={{height:'45px',width:'100%',outline:'none',borderRadius:'5px',border:'1px solid #ccc',fontWeight:'16px'}} type="text" name="debut"id='debut' value={debut} onChange={formik.handleChange} placeholder='Debut'/><br /><br />
      </div>
      <div className='inputbox'>
      <label htmlFor="ODI" style={{fontWeight:'500',margin:'5px',display:'block'}}>ODI:</label>
      <input style={{height:'45px',width:'100%',outline:'none',borderRadius:'5px',border:'1px solid #ccc',fontWeight:'16px'}} type="text" name="ODI"id='ODI' value={ODI} onChange={formik.handleChange} placeholder='ODI runs'/><br /><br />
      </div>
      <div className='inputbox'>
      <label htmlFor="TESTS" style={{fontWeight:'500',margin:'5px',display:'block'}}>TESTS:</label>
      <input style={{height:'45px',width:'100%',outline:'none',borderRadius:'5px',border:'1px solid #ccc',fontWeight:'16px'}} type="text" name="TESTS"id='TESTS' value={TESTS} onChange={formik.handleChange} placeholder='TESTS runs' /><br /><br />
      </div>
      <div className='inputbox'>
      <label htmlFor="T20" style={{fontWeight:'500',margin:'5px',display:'block'}}>T20:</label>
      <input style={{height:'45px',width:'100%',outline:'none',borderRadius:'5px',border:'1px solid #ccc',fontWeight:'16px'}} type="text" name="T20"id='T20' value={T20} onChange={formik.handleChange} placeholder='T20 runs'/><br /><br />
      </div>
      <div className='inputbox'>
      <label htmlFor="image" style={{fontWeight:'500',margin:'5px',display:'block'}}>choose your image</label>
       <input style={{background:'linear-gradient(135deg,#71b7e6,#9b59b6)'}}  type="file" name='image' value={image} onChange={formik.handleChange}/><br /><br />
       </div>
       <div className='button' >
       <input type="submit" value="register" style={{height:'30px',width:'150px',outline:'none',position:'relative',right:'270px',bottom:'-25px',borderRadius:'5px',color:'#fff',background:'linear-gradient(135deg,#71b7e6,#9b59b6)'}} />  
       </div>  
       </div>
    </form>
    </div>
    </div>       
  
  
  )
}

export default Create