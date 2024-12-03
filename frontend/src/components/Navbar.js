import { AppBar, Box, Container, Toolbar, useTheme, Typography, MenuItem } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

const Navbar = ({ pages, dropdown }) => {

    const theme = useTheme()

    return (
        <AppBar position="static" sx={{bgcolor:'breadbrown.main', borderRadius: theme.borderRadius}} >
            <Container maxWidth='xl' >
                <Toolbar disableGutters 
                    sx={{
                        display:'flex', 
                        flexDirection: 'row',
                        justifyContent: 'center'}}> 
                    <Box 
                        sx={{
                            display: {xs:'none', md:'flex'},
                            flexFlow:'row nowrap',
                            alignItems:'center',
                            flexBasis: '33%'
                            }}>
                        <Box
                            sx={{
                                mr: 1,
                                mt: 1,
                                mb: 1,
                                width:theme.logosizing,
                                height:theme.logosizing,

                                }}
                            component="img"    
                            alt="Breadboxd Logo"
                            src="/images/logo.png"
                        />
                        
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            sx={{
                            verticalAlign:'center',
                            fontWeight: 800,
                            color: 'inherit',
                            textDecoration: 'none',
                            }}
                        >
                            Breadboxd
                        </Typography>
                    </Box>
                        

                    <Box 
                        sx={{
                            flexGrow: 1,
                            display: {xs:'none', md:'flex'},
                            flexFlow: 'row nowrap',
                            justifyContent:'space-evenly'
                            }}>

                        {pages.map((page) => (
                            <MenuItem
                                key={page}
                            >

                            <Typography
                                sx={{ my: 2, color: 'white', display: 'block', fontWeight:600 }}>
                                {page}
                            </Typography>

                                
                            </MenuItem> 
                        ))}
                    </Box>

                    <Box sx={{display: {xs:'none', md:'flex'}, flexBasis: '33%', justifyContent:'end'}}>
                        <Tooltip title="Account">
                            <IconButton>
                                <Avatar/>
                            </IconButton>
                        </Tooltip>
                    </Box>



                </Toolbar>
            </Container>
        </AppBar>

    );
}

export default Navbar;