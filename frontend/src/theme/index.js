import { createTheme } from '@mui/material/styles';
import '@fontsource/bebas-neue';

const theme = createTheme({
    palette: {
        breadbrown : {
            main: "#7f5937",
            secondary: "wheat",
        },
        logoOrange : {
            main : "#FF7518"
        },
        buttonGreen : {
            main: "#0d7544"
        }
    },
    borderRadius: 2,
    logoFontFamily: 'bebas neue'
})

export default theme;