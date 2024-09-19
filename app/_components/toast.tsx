"use client";
import { Fragment } from "react";
import toast, { ToastBar, Toaster } from "react-hot-toast";
import { IoClose } from "react-icons/io5";

const PeriskopeToast = () => {
  return (
    <Toaster
      toastOptions={{
        style: {
          background: "#FFFFF",
          fontWeight: "bolder",
          fontSize: "13px",
          borderRadius: "8px",
          width: "fit-content",
          maxWidth: "90%",
        },
      }}
      position="top-center"
    >
      {(t) => (
        <ToastBar toast={t}>
          {({ icon, message }) => (
            <Fragment>
              {icon}
              {message}

              {
                <button
                  onClick={() => {
                    toast.dismiss(t.id);
                  }}
                >
                  <IoClose className="h-4 w-4 cursor-pointer text-gray-400 hover:text-gray-600 " />
                </button>
              }
            </Fragment>
          )}
        </ToastBar>
      )}
    </Toaster>
  );
};

export default PeriskopeToast;
