import LogoImg from "@/assets/logo.svg?react";
import { Box, SvgIcon, Typography} from "@mui/material";
import { useTheme } from "@mui/material";


export default function Logo({size = 50, margin=0}) {
    const theme = useTheme();
    return (
        <Box
            sx={{
                display: {xs:'flex', sm:'none'},
                flexDirection: 'row',
                width:'100%',
                justifyContent:'center',
                margin: margin

            }}
        >
            <SvgIcon component={LogoImg} viewBox="0 0 400 289"
                sx={{
                    width:size, 
                    height:"auto", 
                    display:'flex'
                }}  
            />

        </Box>
    )
}
