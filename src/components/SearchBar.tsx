import React from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

export default function SearchBar() {
  return (
    <TextField
      label="Search for venues"
      size="small"
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon sx={{ color: "#7F00FF" }} />
          </InputAdornment>
        ),
        sx: { borderRadius: 5 }
      }}
    />
  );
}
