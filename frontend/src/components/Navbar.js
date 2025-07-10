import { AppBar, Box, Container, Toolbar, useTheme, Typography, MenuItem, Menu, styled } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Navbar Component for landing page and dashboard
const Navbar = ({ pages, dropdown }) => {

    const [anchorElUser, setAnchorElUser] = useState(null)
    const navigate = useNavigate()
    const theme = useTheme()

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget)

    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null)

    }

    const handleNavigate = (dropItem) => {
        navigate('/' + dropItem)
    }

    const NavbarStyledText = styled(Typography)(({theme}) => ({
    '&:hover' : {
        color: 'blue',
    }, my:theme.navbarMy, display:'block', color:theme.navbarColor, fontWeight:theme.navbarFontWeight
}))

    return (

       ( <AppBar position="static" sx={{bgcolor:'breadbrown.main', borderRadius: theme.borderRadius}} >
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

                            <NavbarStyledText>
                                {page}
                            </NavbarStyledText>

                                
                            </MenuItem> 
                        ))}
                    </Box>

                    {/* Conditionally render account icon or register/login link if page is navbar is on dashboard or landing */}
                    { !dropdown ? 
                        <><Box sx={{display: {xs:'none', md:'flex'}, flexBasis: '33%', justifyContent:'end'}}>
                            <Tooltip title="Account">
                                <IconButton onClick={handleOpenUserMenu}>
                                    <Avatar/>
                                </IconButton>
                            </Tooltip>
                        </Box>

                        <Menu
                            anchorEl={anchorElUser}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                            anchorOrigin={{
                                vertical:'bottom',
                                horizontal:'center'
                            }}
                            transformOrigin={{
                                vertical:'top',
                                horizontal:'center'
                            }}
                            keepMounted
                        >
                            {dropdown.map((dropItem) => (
                            
                            <MenuItem
                                sx={{alignContent:'center'}}
                                key={dropItem}
                            >
                                <Typography 
                                    sx={{textAlign:'center'}}
                                    onClick={() => handleNavigate(dropItem)}>
                                    {dropItem}
                                </Typography>
                            </MenuItem>
                                
                            ))}
                        </Menu> </> :

                        <> <Box sx={{display: {xs:'none', md:'flex'}, flexBasis: '33%', justifyContent:'end'}}>
                            <NavbarStyledText>
                                Register
                            </NavbarStyledText>
                            /
                            <NavbarStyledText>
                                Login
                            </NavbarStyledText>
                        </Box></>}



                </Toolbar>
            </Container>
        </AppBar> )

    ); 
}

export default Navbar;