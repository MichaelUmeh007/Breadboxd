import { useIsMobile } from "../../hooks/useIsMobile"
import { MobileDashboard } from "./MobileDashboard";
import { DesktopDashboard } from "./DesktopDashboard";
import { Box } from "@mui/material";
export const Dashboard = () => {
    const IsMobile = useIsMobile();

    return (
        <Box 
            sx={{
                display:'flex',
                justifyContent:'center',
                alignItems: 'center',
                minHeight:'100vh',
                minWidth:'100vw',
            }}
        >
            { IsMobile ?
                (<MobileDashboard/>) :
                (<DesktopDashboard/>)
            }
        </Box>
    );
};