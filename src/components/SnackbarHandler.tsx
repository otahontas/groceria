import React, { useEffect } from "react";

import { Slide, Snackbar, SnackbarCloseReason } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useRecoilValue } from "recoil";

import { snackBarMessageState } from "../state/atoms";

export const SnackBarHandler: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const snackbarMessage = useRecoilValue(snackBarMessageState);

  useEffect(() => {
    if (snackbarMessage !== "") setOpen(true);
  }, [snackbarMessage]);

  const handleClose = (event: React.SyntheticEvent, reason?: SnackbarCloseReason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return (
    <Snackbar open={open} onClose={handleClose} TransitionComponent={Slide}>
      <Alert onClose={handleClose} severity="error">
        {snackbarMessage}
      </Alert>
    </Snackbar>
  );
};
