import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import { FaLock } from "react-icons/fa";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const LoginPage = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: "10rem", textAlign: "center" }}>
      <Avatar
        sx={{
          backgroundColor: "primary.main",
          m: "auto",
          width: 60,
          height: 60,
        }}
        sizes="100px"
      >
        <FaLock size="40" />
      </Avatar>
      <Typography variant="h4" align="center" mb={4} color="primary.dark">
        Login
      </Typography>

      <Formik
      initialValues={{
        fullName:"",
        email:"",
        password:"",
      }}
      onSubmit ={(values , actions) => {
        //? action kısmında touched blur vs gibi kontrolleri yapıyoruz.
        alert(`fullName : ${values.fullName} email : ${values.email} password : ${values.password}`)
        actions.resetForm()
        actions.setSubmitting(false)
        
      }}
      
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <TextField
            label="Full Name"
            name="fullName"
            id="fullName"
            type="text"
            variant="outlined"
          />
          <TextField
            label="Email"
            name="email"
            id="email"
            type="email"
            variant="outlined"
          />
          <TextField
            label="password"
            name="password"
            id="password"
            type="password"
            variant="outlined"
          />
          <Button type="submit" variant="contained" size="large">
            Submit
          </Button>
        </Box>
      </Formik>
    </Container>
  );
};

export default LoginPage;
