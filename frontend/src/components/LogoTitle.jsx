import Logo from "@/assets/logo.svg?react";
import { Box, SvgIcon, Typography} from "@mui/material";
import { useTheme } from "@mui/material";
export default function LogoTitle ({size = 50, fontSize = '2rem'}) {
    const theme = useTheme();
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                width:'100%',
                justifyContent:'center',
                alignItems: "center",
                gap: 1

            }}
        >
            <SvgIcon component={Logo} viewBox="0 0 400 289"
                sx={{
                    width:size, 
                    height:"auto", 
                    display:'flex'
                }}  
            />

            <Typography
                variant="h5"
                sx={{
                    fontWeight: 'bold',
                    fontFamily: theme.logoFontFamily,
                    fontSize: fontSize,
                    display: 'flex',
                    color: theme.palette.logoOrange.main 
                }}
            >
                Breadboxd
            </Typography>

        </Box>
    )
}
