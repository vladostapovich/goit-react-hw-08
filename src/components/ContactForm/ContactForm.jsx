import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addContact, updateContact } from "../../redux/contacts/operations";
import { showError, showSuccess } from "../helpme/toast";
import { useEffect } from "react";
import { Box, Button, FormHelperText, TextField } from "@mui/material";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^[0-9 -/+]+$/, "Invalid number. You can use '0-9', ' ', '-', '+'")
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const initialValues = { name: "", number: "" };

const ContactForm = ({ editContact, handleEditContact, formRef }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: ContactSchema,
    onSubmit: (values, action) => {
      if (editContact) {
        dispatch(updateContact({ id: editContact.id, ...values }))
          .then(() => showSuccess("updated"))
          .catch(() => showError());
        handleEditContact(null);
      } else {
        dispatch(addContact({ ...values }))
          .then(() => showSuccess("added"))
          .catch(() => showError());
      }
      action.resetForm();
    },
  });

  useEffect(() => {
    if (!editContact) return;
    formik.resetForm();
    formik.setFieldValue("name", editContact.name);
    formik.setFieldValue("number", editContact.number);
  }, [editContact]);

  return (
    <Box
      ref={formRef}
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        width: "100%",
        maxWidth: "375px",
      }}
    >
      <TextField
        fullWidth
        id="name"
        name="name"
        label="Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && Boolean(formik.errors.name)}
      />
      <Box sx={{ minHeight: "25px", mt: "3px" }}>
        {formik.touched.name && formik.errors.name && (
          <FormHelperText error>{formik.errors.name} </FormHelperText>
        )}
      </Box>
      <TextField
        fullWidth
        id="number"
        name="number"
        label="Number"
        type="text"
        value={formik.values.number}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.number && Boolean(formik.errors.number)}
      />
      <Box sx={{ minHeight: "25px", mt: "3px" }}>
        {formik.touched.number && formik.errors.number && (
          <FormHelperText error>{formik.errors.number} </FormHelperText>
        )}
      </Box>
      <Box sx={{ display: "flex", gap: 1 }}>
        {editContact && (
          <Button
            color="primary"
            variant="contained"
            sx={{ mt: 1, mb: 1 }}
            fullWidth
            type="button"
            onClick={() => {
              handleEditContact(null);
              formik.resetForm();
            }}
          >
            Cancel
          </Button>
        )}

        <Button
          color="primary"
          variant="contained"
          sx={{ mt: 1, mb: 1 }}
          fullWidth
          type="submit"
        >
          {editContact ? "Edit" : "Add contact"}
        </Button>
      </Box>
    </Box>
  );
};

export default ContactForm;
