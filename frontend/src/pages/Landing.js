import { Container } from "@mui/material";
import Navbar from "../components/Navbar";




const Landing = () => {
  const pages = ['Login', 'Register', 'Trending']
  
  return (
    <Container 
      sx={{
        paddingTop: "2%"
      }}>
      <Navbar pages={pages}/>
    </Container>

  )
}

export default Landing;