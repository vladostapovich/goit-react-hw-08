import { Box, Button, FormHelperText, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { logIn } from "../../redux/auth/operations";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});
const initialValues = {
  email: "",
  password: "",
};
const LoginForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values, action) => {
      dispatch(logIn(values))
        .unwrap()
        .then(() => {
          action.resetForm();
        })
        .catch(() => {
          showError("Wrong password or email!");
        });
    },
  });
  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{ mt: 2, width: "100%" }}
    >
      <TextField
        fullWidth
        id="email"
        name="email"
        label="Email"
        autoComplete="username"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
      />
      <Box sx={{ minHeight: "25px", mt: "3px" }}>
        {formik.touched.email && formik.errors.email && (
          <FormHelperText error>{formik.errors.email} </FormHelperText>
        )}
      </Box>
      <TextField
        fullWidth
        id="password"
        name="password"
        label="Password"
        type="password"
        autoComplete="current-password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
      />
      <Box sx={{ minHeight: "25px", mt: "3px" }}>
        {formik.touched.password && formik.errors.password && (
          <FormHelperText error>{formik.errors.password} </FormHelperText>
        )}
      </Box>
      <Button
        color="primary"
        variant="contained"
        sx={{ mt: 1, mb: 1 }}
        fullWidth
        type="submit"
      >
        Submit
      </Button>
    </Box>
  );
};
export default LoginForm;
