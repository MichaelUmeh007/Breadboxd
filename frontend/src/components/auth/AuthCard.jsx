import MuiCard from '@mui/material/Card';
import { useTheme } from '@mui/material';

export default function AuthCard({children}) {
    const theme = useTheme();
    return (
        <MuiCard variant='outlined' elevation={0}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignSelf: 'center',
                width: '100%',
                margin: 'auto',
                backgroundColor: theme.palette.breadbrown.main,
                borderRadius: theme.borderRadius,
                padding: theme.spacing(4),
                pt: {xs:theme.spacing(2), sm:theme.spacing(4)},
                gap: theme.spacing(2),
                [theme.breakpoints.up('sm')]: {
                width: '450px',
                }
            }}
        >
            {children}
        </MuiCard>
    )
}