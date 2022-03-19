import { toast, ToastPosition } from "react-toastify";

export const successToast = (message: string, position: ToastPosition = toast.POSITION.BOTTOM_CENTER) => {
  toast.success(message, { position: position });
};

export const errorToast = (message: string, position: ToastPosition = toast.POSITION.BOTTOM_CENTER) => {
  toast.error(message, { position: position });
};
