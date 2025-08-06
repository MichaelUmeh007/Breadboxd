import { createTheme } from '@mui/material/styles';
import '@fontsource/bebas-neue';

const theme = createTheme({
    palette: {
        breadbrown : {
            main: "#7f5937",
        },
        logoOrange : {
            main : "#F28C28"
        },
        buttonGreen : {
            main: "#0d7544"
        }
    },
    borderRadius: 2,
    backgroundColor: "wheat",
    logoFontFamily: 'bebas neue'
})

export default theme;