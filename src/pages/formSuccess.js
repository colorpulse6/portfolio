import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"


const FormSuccess = () => {
  return (
      <div style={{margin:'0 auto',
      textAlign:'center', width:'200px', marginTop:'20%', padding:'20px'}}>
        <p>Your message was successfull!</p>
        <Link to ='/'>Back</Link>
      </div>
      
    
  )
}

export default FormSuccess
