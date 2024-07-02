import { useState } from "react";
import { deleteContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { showError, showSuccess } from "../helpme/toast";
import ConfirmModal from "../ConfirmModal/ConfirmModal";

const Contact = ({ id, name, number, handleEditContact }) => {
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);

  const handleOpenModal = () => {
    setConfirmModalOpen(true);
  };
  const handleCloseModal = () => {
    setConfirmModalOpen(false);
  };

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id))
      .then(() => showSuccess("deleted"))
      .catch(() => showError());
  };

  return (
    <>
      <Card sx={{ display: "flex", justifyContent: "space-between" }}>
        <CardContent>
          <Typography variant="h6" sx={{ fontSize: 14 }} gutterBottom>
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" component="div">
            {number}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Button size="small" onClick={handleOpenModal}>
            Delete
          </Button>
          <Button
            size="small"
            onClick={() => handleEditContact({ id, name, number })}
          >
            Edit
          </Button>
        </CardActions>
      </Card>
      <ConfirmModal
        open={confirmModalOpen}
        handleClose={handleCloseModal}
        handleConfirm={handleDelete}
        contact={{ name, number }}
      />
    </>
  );
};

export default Contact;
