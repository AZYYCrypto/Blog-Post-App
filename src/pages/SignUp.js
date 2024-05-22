import { useState } from "react";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLoginButton } from "react-social-login-buttons";
import { useAppContext } from "../contexts/AppContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../configs/firebase";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const initialStateValuesForm = {
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    password: "",
    passwordConfirm: "",
    termAndConditions: false,
  };

  const passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(4, "Please Enter Valid First Name")
      .required("First name is required"),
    lastName: Yup.string()
      .min(4, "Please Enter Valid Last Name")
      .required("Last name is required"),
    gender: Yup.string()
      .oneOf(["Male", "Female"], "Gender is required")
      .required("Gender is required"),
    email: Yup.string()
      .email("Please Enter Valid Email")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password minimum length should be 8")
      .matches(
        passwordRegEx,
        "Password must have one upper, lower case, number, special symbols"
      )
      .required("Password is required"),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref("password")], "Confirm password not correct")
      .required("Password confirmation is required"),
    termAndConditions: Yup.string().oneOf(
      ["true"],
      "Accept terms & conditions"
    ),
  });

  const { googleSignIn, user, createUser } = useAppContext();
  const navigate = useNavigate();

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    setTimeout(() => {
      resetForm();
      setSubmitting(false);
    }, 800);
    try {
      const { user } = await createUser(values.email, values.password);
      localStorage.setItem("uid", user.uid);

      const usersCollectionRef = collection(db, "users");
      await addDoc(usersCollectionRef, {
        id: user.uid,
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        gender: values.gender,
      });
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/account");
    }
  }, [user]);

  return (
    <Formik
      initialValues={initialStateValuesForm}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {(props) => (
        <Form
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Container maxWidth="sm">
            <Paper
              elevation={24}
              sx={{
                display: "flex",
                flexDirection: "column",
                margin: "2.5rem",
                gap: "0.5rem",
              }}
            >
              <Grid align="center" sx={{ marginTop: "1rem" }}>
                <Avatar sx={{ backgroundColor: "#1976D2" }}>
                  <AddCircleOutlineOutlinedIcon />
                </Avatar>

                <Typography variant="h4" sx={{ marginTop: "1rem" }}>
                  Sign Up
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Field
                    as={TextField}
                    id="outlined-title-input"
                    label="First Name"
                    name="firstName"
                    placeholder="Enter your first name"
                    type="text"
                    sx={{ margin: "1rem" }}
                    helperText={
                      <ErrorMessage name="firstName">
                        {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                      </ErrorMessage>
                    }
                    autoFocus={true}
                  />
                  <Field
                    as={TextField}
                    id="outlined-title-input"
                    label="Last Name"
                    name="lastName"
                    placeholder="Enter your last name"
                    type="text"
                    sx={{ margin: "1rem" }}
                    helperText={
                      <ErrorMessage name="lastName">
                        {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                      </ErrorMessage>
                    }
                  />

                  <Field
                    as={TextField}
                    id="outlined-title-input"
                    label="Email"
                    name="email"
                    placeholder="Enter email"
                    type="email"
                    sx={{ margin: "1rem" }}
                    helperText={
                      <ErrorMessage name="email">
                        {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                      </ErrorMessage>
                    }
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: "1rem",
                    }}
                  >
                    <FormLabel id="demo-radio-buttons-group-label">
                      Gender
                    </FormLabel>
                    <Field
                      as={RadioGroup}
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="gender"
                      sx={{ display: "initial" }}
                    >
                      <FormControlLabel
                        value="Male"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="Female"
                        control={<Radio />}
                        label="Female"
                      />
                    </Field>
                  </Box>
                  <FormHelperText sx={{ textAlign: "center" }}>
                    <ErrorMessage name="gender">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </ErrorMessage>
                  </FormHelperText>
                  <FormControl sx={{ margin: "1rem" }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <Field
                      as={OutlinedInput}
                      id="outlined-adornment-password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Enter password"
                      required
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                    <ErrorMessage name="password">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </ErrorMessage>
                  </FormControl>
                  <FormControl sx={{ margin: "1rem" }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-confirm-password">
                      Confirm Password
                    </InputLabel>
                    <Field
                      as={OutlinedInput}
                      id="outlined-adornment-confirm-password"
                      type={showConfirmPassword ? "text" : "password"}
                      name="passwordConfirm"
                      placeholder="Enter password"
                      required
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle confirm password visibility"
                            onClick={handleClickShowConfirmPassword}
                            edge="end"
                          >
                            {showConfirmPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Confirm Password"
                    />
                    <ErrorMessage name="passwordConfirm">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </ErrorMessage>
                  </FormControl>
                  <FormControlLabel
                    control={<Field as={Checkbox} name="termAndConditions" />}
                    label="I accept the terms and conditions"
                    sx={{ marginLeft: "0.3rem" }}
                  />
                  <FormHelperText sx={{ textAlign: "center" }}>
                    <ErrorMessage name="termAndConditions">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </ErrorMessage>
                  </FormHelperText>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ margin: "1rem" }}
                    disabled={props.isSubmitting}
                  >
                    {props.isSubmitting ? "Loading.." : "Sign up"}
                  </Button>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      marginBottom: "2rem",
                    }}
                  >
                    <Typography>
                      Already have an account yet?{" "}
                      <Link to="/login" style={{ color: "#1976D2" }}>
                        Sign In
                      </Link>
                    </Typography>
                  </Box>

                  {/* <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <GoogleLoginButton
                  style={{
                    borderRadius: "1rem",
                    margin: "2rem 2rem",
                    maxWidth: "52%",
                  }}
                  onClick={handleGoogleSignIn}
                >
                  Continue with Google
                </GoogleLoginButton>
              </Box> */}
                </Box>
              </Grid>
            </Paper>
          </Container>
        </Form>
      )}
    </Formik>
  );
};

export default SignUp;
