import './index.css';
import './App.css'
import Email from './Email';
import Box from '@mui/material/Box';
import { Icon, Typography } from '@mui/material';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';



function App() {
  return (
   <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}} >
   
    <img src="logo.svg" alt="logo" width={90} height={29} style={{margin:"1.5rem 0"}}/>
    <h1><span style={{color: '#969696', fontWeight:"400"}}>We are launching </span>soon!</h1>
    <p style={{fontWeight:"300"}}>Subscribe and get notified</p>
      
    <Email/>
    <img className='illustration' src="illustration-dashboard.png" alt="dashboard-Illustration"  width={640} height={380} />
    
    
    <div className="icons">
      {/* this section contains icons such as IG, FB, Twitter, etc. */}
      <Icon sx={{color:"#4C7BF3", border:"1px solid #B8C7ED", borderRadius:"4.5rem", margin:"1rem"}}>
      <FacebookSharpIcon></FacebookSharpIcon>
      </Icon>
      <Icon sx={{color:"#4C7BF3", border:"1px solid #B8C7ED", borderRadius:"4.5rem", margin:"1rem"}}>
         <TwitterIcon></TwitterIcon>
      </Icon>
      <Icon sx={{color:"#4C7BF3", border:"1px solid #B8C7ED", borderRadius:"4.5rem", margin:"1rem", ":hover": {backgroundColor:"hsl(223, 87%, 63%)s"}}}>
         <InstagramIcon></InstagramIcon>
      </Icon>
  
    </div>
    <Typography className='footer' sx={{color:"#969696", fontWeight:"300", marginTop:"0.5rem"}}>&copy; Copyright Ping. All rights reserved</Typography>
   
   </Box>
  )
}

export default App
