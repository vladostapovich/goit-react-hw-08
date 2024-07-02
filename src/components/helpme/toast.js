import toast from "react-hot-toast";

export const showSuccess = (action) => {
  toast.success(`Successfully ${action}!`);
};

export const showError = (message = "Ops, something went wrong!") => {
  toast.error(message);
};
