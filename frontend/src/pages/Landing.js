import { Container } from "@mui/material";
import Box from "@mui/material/Box"
import Navbar from "../components/Navbar";
import theme from "../theme";




const Landing = () => {
  const pages = ['Spotlight']
  const dropdown = ['Login', 'Register']

  
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
          height: '100vh',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display:"flex",
          justifyContent:"center",
          backgroundColor: theme.backgroundColor
      }}>

      <Box

        sx={{
          width:'70%',
          paddingTop: "2%",
          
        }}>
          
          <Navbar pages={pages} dropdown={dropdown} />
      </Box>


      
    </Container>

  )
}

export default Landing;