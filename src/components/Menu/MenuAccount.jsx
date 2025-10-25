import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Logout from "@mui/icons-material/Logout";
import {
  CancelScheduleSend,
  GifBoxTwoTone,
  Person2,
  Person3,
  Star,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("userId");
    navigate("/login");
  };
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <IconButton
          onClick={handleClick}
          size="small"
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar
            sx={{
              width: 32,
              height: 32,
              backgroundColor: "#DB4444",
              color: "#fff",
            }}
          >
            <Person3 />
          </Avatar>
        </IconButton>
      </Box>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            width: 224,
            borderRadius: "8px",
            background: "rgba(255, 255, 255, 0.4)",
            backdropFilter: "blur(20px)",
            mt: 1.5,
            overflow: "visible",
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Person2 fontSize="small" />
          </ListItemIcon>
          Manage My Account{" "}
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <GifBoxTwoTone fontSize="small" />
          </ListItemIcon>
          My Order{" "}
        </MenuItem>

        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <CancelScheduleSend fontSize="small" />
          </ListItemIcon>
          My Cancellations
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Star fontSize="small" />
          </ListItemIcon>
          My Reviews
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
