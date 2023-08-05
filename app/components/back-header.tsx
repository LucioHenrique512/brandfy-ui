import React from "react";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const BackHeader: React.FC<{ onPress: () => void }> = ({ onPress }) => {
  return (
    <>
      <IconButton aria-label="delete" size="large" onClick={onPress}>
        <ArrowBackIcon />
      </IconButton>
    </>
  );
};
