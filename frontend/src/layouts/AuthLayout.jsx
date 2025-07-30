import { Stack } from "@mui/material";

export default function AuthLayout({backgroundImage, children}) {
    return (
        <Stack component={'main'}
          sx={{
            flexDirection:'column',
            justifyContent:'center',
            minHeight:'100vh',
            minWidth:'100vw',
            backgroundImage:{
                xs:`radial-gradient(circle at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%),url(${backgroundImage})`,
                sm:`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${backgroundImage})`,
            },
            backgroundSize:'cover',
            backgroundPosition:'center'
          }}
        >
        <Stack
          direction={{ xs: 'column-reverse', md: 'row' }}
          sx={{
            justifyContent: 'center',
            gap: { xs: 6, sm: 12 },
            p: 2,
            mx: 'auto',
          }}
        >
          <Stack
            direction={{ xs: 'column-reverse', md: 'row' }}
            sx={{
              justifyContent: 'center',
              gap: { xs: 6, sm: 12 },
              p: { xs: 2, sm: 4 },
              m: 'auto',
            }}
          >
            {children}
          </Stack>
        </Stack>
        </Stack>
    )
}