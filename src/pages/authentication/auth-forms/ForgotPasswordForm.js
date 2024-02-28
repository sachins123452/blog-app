import React, { useState } from 'react';
import { Button, FormHelperText, Grid, IconButton, InputLabel, OutlinedInput, Stack } from '@mui/material';
import * as Yup from 'yup';
import { Formik } from 'formik';
import AnimateButton from 'components/@extended/AnimateButton';
import { UserOutlined } from '@ant-design/icons';
import { API } from 'api/API';
import { showDanger } from 'components/nudges/Alert';
import Resetpasswordmodal from 'components/modals/contentmodal/Resetpasswordmodal';
import useApiCall from 'api/useApiCall';
const ForgotPasswordForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {makeRequestWithoutLogin}=useApiCall()
  return (
    <>
      <Formik
        initialValues={{
          email: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Must be a valid Email Address').max(255).required('User Name is required')
        })}
        onSubmit={async (values) => {
          try {
            let params = {
              email: values.email
            };
            let res = await makeRequestWithoutLogin({ method: 'POST', url: API.forgetpswd, params });
            console.log('API Response', res);
            if (res?.statusCode == 200) {
              setIsOpen(true);
            } else {
              showDanger(`${res?.message}`);
            }
          } catch (e) {
            showDanger(`${e}`);
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
                height: '12rem',
                backgroundColor: '#fff',
                display: 'flex',
                alignItems: 'center',
                width: '21rem'
              }}
            >
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel
                    htmlFor="email-login"
                    sx={{
                      color: '#000',
                      fontFamily: 'Medium',
                      fontSize: 13,
                      alignSelf: 'start'
                    }}
                  >
                    Email address
                  </InputLabel>
                  <OutlinedInput
                    sx={{
                      width: '18rem'
                    }}
                    id="email-login"
                    // value={values.email}
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter registered email address"
                    startAdornment={
                      <IconButton aria-label="lock" edge="start" size="small" sx={{ color: '#0174bf', width: 0 }}>
                        <UserOutlined />
                      </IconButton>
                    }
                    // fullWidth
                    error={Boolean(touched.email && errors.email)}
                  />
                  {touched.email && errors.email && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                      {errors.email}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>

              <Grid item xs={12} style={{ paddingTop: 0 }} sx={{ width: '100%', alignItems: 'center', display: 'flex' }}>
                <AnimateButton>
                  <Button
                    style={{ backgroundColor: '#0474C0' }}
                    sx={{ width: '18rem' }}
                    disableElevation
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Reset Password
                  </Button>
                </AnimateButton>
              </Grid>
              <div>
                <Resetpasswordmodal isOpen={isOpen} setIsOpen={setIsOpen} />
              </div>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
};

export default ForgotPasswordForm;
