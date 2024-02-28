import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, FormHelperText, Grid, Link, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack } from '@mui/material';
import * as Yup from 'yup';
import { Formik } from 'formik';
import AnimateButton from 'components/@extended/AnimateButton';
import { EyeOutlined, EyeInvisibleOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { dispatch } from 'store/index';
import { updateAuth } from 'store/reducers/auth';
import { useNavigate } from 'react-router-dom';
import { API } from 'api/API';
import { showDanger, showSuccess } from 'components/nudges/Alert';
import useNetworkStatus from 'hooks/useNetworkStatus';
import { useTheme } from 'components/Theme/ThemeProvider';
import useApiCall from 'api/useApiCall';
import { removeData } from 'store/reducers/placeOrder';


const AuthLogin = () => {

  const {currentTheme}= useTheme()
  const navigate = useNavigate();
  const network= useNetworkStatus();
  const {makeRequest,makeRequestWithoutLogin}=useApiCall()
  const [showPassword, setShowPassword] = React.useState(false);
  console.log('network',network)
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
 
 
  useEffect(()=>{
    let login = localStorage.getItem('@login');
    if(login){
      navigate('/')
    }
  },[])
  

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Must be a valid Email adress').max(255).required('User Name is required'),
          password: Yup.string().max(255).required('Password is required')
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          console.log(values);
          try {
            if(!network){
              showDanger('No internet connection.')
              return
            }
            let loginParams = {
              username: values.email,
              password: values.password
            };
            let loginResponse = await makeRequestWithoutLogin({ method: 'POST', url: API.loginwithemail, params: loginParams });
            console.log('loginResponse', loginResponse);
            if (loginResponse?.statusCode === 200 && loginResponse?.message === 'Login OK !!') {
              localStorage.setItem('@login', JSON.stringify(loginResponse?.data));
              try {
                let profileParams = {
                  EmployeeId:loginResponse.data.data.EmployeeId
                };
                let profileResponse = await makeRequest({ method: 'GET', url: API.getProfile, params: profileParams });
                if (profileResponse?.statusCode === 200) {
                  localStorage.setItem('@user', JSON.stringify(profileResponse?.data));
                  showSuccess('Login successfully');
                  dispatch(updateAuth({ status: true }));
                  dispatch(removeData())
                  navigate('/', { state: {}, replace: false });
                } else {
                  showDanger(`${profileResponse?.message}`);
                }
              } catch (profileError) {
                showDanger(`${profileError}`);
              }
            } else if (loginResponse.statusCode === 400) {
              showDanger('Incorrect username or password');
            } else {
              showDanger(`${loginResponse?.message}`);
            }
          } catch (error) {
            showDanger(`${error}`);
          }

          try {
            setStatus({ success: false });
            setSubmitting(false);
          } catch (err) {
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(false);
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid
              container
              spacing={3}
              sx={{
                margin: 'auto',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                backgroundColor:currentTheme.bodyColor  ,              
                display: 'flex',
                alignItems: 'center',
                width: '21rem',
                border:'1px solid #fff'
              }}
            >
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel
                    htmlFor="email-login"
                    sx={{
                      color: currentTheme.textColor,
                      fontFamily: 'Medium',
                      fontSize: 13,
                      alignSelf: 'start'
                    }}
                  >
                    User Name
                  </InputLabel>
                  <OutlinedInput
                    sx={{
                      width: '18rem'
                    }}
                    id="email-login"
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter User Name"
                    startAdornment={
                      <IconButton aria-label="lock" edge="start" size="small" sx={{ color: '#0174bf', width: 0 }}>
                        <UserOutlined />
                      </IconButton>
                    }
                    error={Boolean(touched.email && errors.email)}
                  />
                  {touched.email && errors.email && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                      {errors.email}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} sx={{}}>
                <Stack spacing={1}>
                  <InputLabel
                    sx={{
                      color: currentTheme.textColor,
                      fontFamily: 'Medium',
                      fontSize: 13,
                      alignSelf: 'start'
                    }}
                    htmlFor="password-login"
                  >
                    Password
                  </InputLabel>

                  <OutlinedInput
                    sx={{ width: '18rem' }}
                    error={Boolean(touched.password && errors.password)}
                    id="-password-login"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    startAdornment={
                      <IconButton aria-label="lock" edge="start" size="small" sx={{ color: '#0474C0', width: 0 }}>
                        <LockOutlined />
                      </IconButton>
                    }
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          size="small"
                          sx={{ color: '#0474C0' }}
                        >
                          {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                        </IconButton>
                      </InputAdornment>
                    }
                    placeholder="Enter password"
                  />
                  {touched.password && errors.password && (
                    <FormHelperText error id="standard-weight-helper-text-password-login">
                      {errors.password}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>

              {errors.submit && (
                <Grid item xs={12}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Grid>
              )}
              <Grid item xs={12} sx={{ width: '100%', alignItems: 'center', display: 'flex' }}>
                <AnimateButton>
                  <Button
                    sx={{
                      width: '18rem'
                    }}
                    style={{ backgroundColor: '#0474C0' }}
                    disableElevation
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Login
                  </Button>
                </AnimateButton>
              </Grid>
              <Grid item xs={11} sx={{ mt: -2 }}>
                <Stack alignItems="center">
                  <Link
                    variant="h6"
                    component={RouterLink}
                    to="/forgotPassword"
                    color="text.primary"
                    sx={{
                      fontFamily: 'Medium',
                      fontSize: 13,
                      color: currentTheme.textColor,
                    }}
                  >
                    Forgot Password?
                  </Link>
                </Stack>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
     
    </>
  );
};

export default AuthLogin;
