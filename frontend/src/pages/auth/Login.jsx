import {
  Box,
  Button,
  Container,
  FormHelperText,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  useTheme
} from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from "react-router-dom";
import loginBackground from '../../assets/loginbackground.jpg'


export const OldLogin = () => {
  const theme = useTheme();

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        height: '110vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          background: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <Box
          sx={{
            position: "fixed",
            display: "flex",
            flexDirection: 'column',
            alignItems: "center",
            top: '5%',
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              pl: "25%",
              pr: "25%",
              textAlign: "center",
              fontWeight: "bold",
              marginBottom: theme.spacing(2),
              color: "wheat"
            }}
          >
            What's Looking, Good Cooking?
          </Typography>

          <Box sx={{ width: "360px" }}>
            <Box
              sx={{
                marginTop: 5,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: theme.palette.breadbrown.main,
                borderRadius: theme.borderRadius,
                width: "100%"
              }}
            >
              <Typography
                variant="h4"
                component="h5"
                sx={{
                  color: "white",
                  fontFamily: "monospace",
                  marginTop: 2,
                  mb: 1,
                  fontWeight: "bold"
                }}
              >
                Sign In
              </Typography>

              <Box component="form" sx={{
                marginTop: 1,
                marginBottom: 3,
                width: '100%',
                display: "flex",
                justifyContent: "center",
                flexDirection: "column"
              }}>
                <Grid container spacing={2} sx={{ flexDirection: "column", flexGrow: 1 }}>
                  <Grid xs={12} sx={{ pl: theme.spacing(2), pr: theme.spacing(2) }}>
                    <TextField
                      sx={{ backgroundColor: "white", borderRadius: theme.borderRadius * 1.5 }}
                      slotProps={{
                        input: {
                          startAdornment: (
                            <InputAdornment position="start">
                              <AccountCircle />
                            </InputAdornment>
                          ),
                        },
                      }}
                      required
                      fullWidth
                      variant="outlined"
                      id="username"
                      name="username"
                      placeholder="Username"
                      autoComplete="username"
                    />
                    <FormHelperText sx={{ color: "red", fontSize: 14 }} />
                  </Grid>

                  <Grid xs={12} sx={{ pl: theme.spacing(2), pr: theme.spacing(2) }}>
                    <TextField
                      sx={{ backgroundColor: "white", borderRadius: theme.spacing(1.5) }}
                      slotProps={{
                        input: {
                          startAdornment: (
                            <InputAdornment position="start">
                              <LockIcon />
                            </InputAdornment>
                          ),
                        },
                      }}
                      required
                      fullWidth
                      variant="outlined"
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Password"
                    />
                    <FormHelperText sx={{ color: "red", fontSize: 14 }} />
                  </Grid>
                </Grid>

                <Button
                  type="submit"
                  variant="contained"
                  size="Medium"
                  sx={{ marginTop: theme.spacing(2), backgroundColor: "#0d7544", maxWidth: "40%", left: "30%" }}
                >
                  Login
                </Button>

                <Box sx={{ display: "flex", flexDirection: 'row', mt: '3%', justifyContent: 'center' }}>
                  <Typography sx={{ mr: 1, color: 'wheat' }}>
                    New to Breadboxd?
                  </Typography>
                  <Link style={{ color: '#87CEEB' }} > Sign Up</Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export const Login = () => {
    return (
        <Stack
          sx={{
            flexDirection:'column',
            component:'main',
            justifyContent:'center',
            minHeight:'100vh',
            minWidth:'100vw',
            backgroundImage:`url(${loginBackground})`,
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
            <Box 
              sx={{
                width:'100%',
                maxWidth:450,
                alignSelf:'center',
                flexDirection:'column'
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis expedita ex vel nostrum suscipit voluptatum commodi saepe adipisci iure eum, dolor quos consequuntur temporibus praesentium debitis labore quibusdam placeat facere.
            </Box>
            <Box 
              sx={{
                width:'100%',
                maxWidth:450,
                alignSelf:'center',
                flexDirection:'column'
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dicta voluptate eius est expedita aliquid minima? Delectus blanditiis ratione officia corporis. Dolorem repudiandae velit, aliquid sed minus consectetur id accusantium!
            </Box>
          </Stack>
        </Stack>
        </Stack>
    )
}

