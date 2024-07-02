import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { Box, Container, Typography } from "@mui/material";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox.jsx";
import ContactList from "../../components/ContactList/ContactList";
import { Toaster } from "react-hot-toast";

const ContactsPage = () => {
  const dispatch = useDispatch();

  const [editContact, setEditContact] = useState(null);

  const handleEditContact = (contact) => {
    formRef.current.scrollIntoView({ block: "center", behavior: "smooth" });
    setEditContact(contact);
  };

  const formRef = useRef(null);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container component="main" maxWidth="lg">
      <Typography variant="h4" sx={{ mt: 4, mb: 4, textAlign: "center" }}>
        Contacts Management
      </Typography>
      <Box
        sx={{
          py: 5,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 5,
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            bgcolor: "background.paper",
            p: 4,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <ContactForm
            editContact={editContact}
            handleEditContact={handleEditContact}
            formRef={formRef}
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <SearchBox />
          <ContactList handleEditContact={handleEditContact} />
        </Box>
      </Box>
      <Toaster />
    </Container>
  );
};

export default ContactsPage;
