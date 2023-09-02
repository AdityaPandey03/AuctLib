import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  TextField,
  Button,
  Container,
  Typography,
  Paper,
} from '@material-ui/core';

const SignupForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: '',
        name: '',
        phone: '',
        address: '',
        college: '',
      }}
      validationSchema={Yup.object({
        username: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string()
          .min(6, 'Must be at least 6 characters')
          .required('Required'),
        name: Yup.string().required('Required'),
        phone: Yup.string().required('Required'),
        address: Yup.string().required('Required'),
        college: Yup.string().required('Required'),
      })}
      onSubmit={onSubmit}
    >
      <Form>
        <Container component="main" maxWidth="xs">
          <Paper elevation={3}>
            <Typography variant="h4">Sign Up</Typography>
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              label="Username"
              name="username"
              as={Field} // Use 'as' to render TextField
            />
            <ErrorMessage name="username" component="div" />
            
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              label="Email"
              name="email"
              type="email"
              as={Field} // Use 'as' to render TextField
            />
            <ErrorMessage name="email" component="div" />
            
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              label="Password"
              name="password"
              type="password"
              as={Field} // Use 'as' to render TextField
            />
            <ErrorMessage name="password" component="div" />
            
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              label="Name"
              name="name"
              as={Field} // Use 'as' to render TextField
            />
            <ErrorMessage name="name" component="div" />
            
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              label="Phone"
              name="phone"
              as={Field} // Use 'as' to render TextField
            />
            <ErrorMessage name="phone" component="div" />
            
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              label="Address"
              name="address"
              as={Field} // Use 'as' to render TextField
            />
            <ErrorMessage name="address" component="div" />
            
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              label="College"
              name="college"
              as={Field} // Use 'as' to render TextField
            />
            <ErrorMessage name="college" component="div" />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Sign Up
            </Button>
          </Paper>
        </Container>
      </Form>
    </Formik>
  );
};

export default SignupForm;
