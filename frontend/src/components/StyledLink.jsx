import { Link } from 'react-router-dom';
import { colors, styled } from '@mui/material';

const StyledLink = styled(Link) ({
    color: '#87CEEB',
    textDecoration: 'none',
    '&:hover': {
        textDecoration: 'underline',
        color: '#87CEEB'
    }
})

export default StyledLink
