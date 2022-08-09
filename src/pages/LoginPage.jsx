import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import { FaLock } from "react-icons/fa";
import { Formik, Form } from "formik";
//? formik ve formu formikten import et. Formik içine initialValues ve onSubmit
//? daha sonra formun içine ise inputlarının yer aldığı kısımı koyuyoruz.
//* birden fazla form kullanılcaksa (muiden nin formu) allias olarak import et.
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
          fullName: "",
          email: "",
          password: "",
        }}
        onSubmit={(values, actions) => {
          //? action kısmında touched blur vs gibi kontrolleri yapıyoruz.
          alert(
            `fullName : ${values.fullName} email : ${values.email} password : ${values.password}`
          );
          actions.resetForm();
          actions.setSubmitting(false);
        }}
        validationSchema={Yup.object().shape({
          fullName: Yup.string()
            .max(20, "Must be 20 or less characters")
            .required("Full Name is required"),
          email: Yup.string()
            .email("Must be a valid email")
            .required("Email is required"),
          password: Yup.string()
            .min(8, "Must be 8 or more characters")
            .max(16, "Must be 16 or less characters").required().matches(/\d+/ , "Must contain a number").matches(/[a-z]+/ , "Must contain a lowercase letter").matches(/[A-Z] + / ,  "Must contain an uppercase letter").matches(/[!,?{}<>&$#.,-_] +/ , "Must contain a special character")
        })}
      >
        {/* 
        {({destructure ederek bilgileri kullan}) => ()} */}

        {({ values, handleChange, errors, touched, handleBlur }) => (
          <Form>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <TextField
                label="Full Name"
                name="fullName"
                id="fullName"
                type="text"
                variant="outlined"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.fullName && errors.fullName}
                error={touched.fullName && Boolean(errors.fullName)}
              />
              <TextField
                label="Email"
                name="email"
                id="email"
                type="email"
                variant="outlined"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.fullName && errors.email}
                error={touched.fullName && Boolean(errors.email)}
              />
              <TextField
                label="password"
                name="password"
                id="password"
                type="password"
                variant="outlined"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                helperText={touched.fullName && errors.password}
                error={touched.fullName && Boolean(errors.password)}
              />
              <Button type="submit" variant="contained" size="large">
                Submit
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default LoginPage;
