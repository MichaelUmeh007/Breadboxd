import { useIsMobile } from "../../hooks/useIsMobile"
import { MobileDashboard } from "./MobileDashboard";
import { DesktopDashboard } from "./DesktopDashboard";
import { Box } from "@mui/material";
export const Dashboard = () => {
    const IsMobile = useIsMobile();

    return (
        <Box>
            { IsMobile ?
                (<MobileDashboard/>) :
                (<DesktopDashboard/>)
            }
        </Box>
    );
};