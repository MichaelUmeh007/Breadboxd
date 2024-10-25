import { AppBar, Box, Container, Toolbar, useTheme } from "@mui/material";



const Navbar = ({ pages }) => {

    const theme = useTheme()

    return (
        <AppBar position="static" sx={{bgcolor:'breadbrown.main', borderRadius:theme.borderRadius}}>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <Box
                        sx={{ 
                            display: { xs: 'none', md: 'flex' },
                            mr: 1,
                            width:theme.logosizing,
                            height:theme.logosizing,

                            }}
                        component="img"    
                        alt="Breadboxd Logo"
                        src="/images/logo.png"
                    />

                </Toolbar>
            </Container>

        </AppBar>

    );
}

export default Navbar;