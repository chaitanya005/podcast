import React from "react";
import { useToasts } from "react-toast-notifications";

const ToastDemo = ({ content }) => {
  const { addToast } = useToasts();
  return (
    <button
      onClick={() =>
        addToast(content, {
          appearance: "success",
          autoDismiss: true,
        })
      }
    >
      Add Toast
    </button>
  );
};

export default ToastDemo;
