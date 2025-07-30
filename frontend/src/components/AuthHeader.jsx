import Logo from "@/assets/logo.svg?react";
import { Box, SvgIcon, Typography} from "@mui/material";


export const AuthHeader = () => {
    return (
        <Box
            sx={{
                display:'flex',
                flexDirection: 'row',
                width:'100%',
                justifyContent:'center'

            }}
        >
            <SvgIcon component={Logo} viewBox="0 0 400 289"
                sx={{
                    width:50, 
                    height:"auto", 
                    display:{xs:'flex', sm:'None'},
                }}  
            />


        </Box>
    )
}
