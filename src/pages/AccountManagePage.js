import React, { useEffect, useState, useRef } from "react";
import Box from "@mui/material/Box";
import axios from "axios";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import { makeStyles, Paper, Typography } from "@material-ui/core";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import PersonAvatar from "@mui/icons-material/Person";
import ListSubheader from "@mui/material/ListSubheader";
import Stack from "@mui/material/Stack";
import { SliderValueLabel } from "@mui/material";
import { VpnLock } from "@mui/icons-material";
import AccountDialog from "../components/accountDialog/AccountDialog";
import DeleteDialog from "../components/deleteDialog/DeleteDialog";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import CreateDialog from "../components/createDialog/CreateDialog";

const AccountManagePage = () => {
  const [nameUpdating, setNameUpdating] = useState("");
  const [open, setOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const handleOpen = (user) => {
    console.log("open", user);
    setSelectedUser(user);
    setOpen(true);
  };
  const handleDeleteDialogOpen = (user) => {
    console.log("delete open", user);
    setSelectedUser(user);
    setDeleteDialogOpen(true);
  };
  const handleCreateDialogOpen = () => {
    setCreateDialogOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleDeleteDialogClose = () => {
    setDeleteDialogOpen(false);
  };
  const handleCreateDialogClose = () => {
    setCreateDialogOpen(false);
  };

  const [users, setUsers] = useState([]);
  const getUsers = () => {
    axios.get("/user").then((e) => {
      setUsers(e.data.data);
    });
  };
  useEffect(() => {
    getUsers();
    console.log(users);
  }, []);
  return (
    <Box style={{ height: "70vh" }}>
      <Box sx={{ border: 1, borderColor: "black" }}>
        <Stack direction="row" sx={{ m: 1 }}>
          <PersonAvatar sx={{ m: 1 }} />
          <Box sx={{ m: 0, p: 1, width: 230, borderLeft: 1 }}>
            <Typography noWrap>{`이름`}</Typography>
          </Box>
          {/* <Divider orientation="vertical"/> */}
          <Box sx={{ m: 0, p: 1, width: 230, borderLeft: 1 }}>
            <Typography noWrap>{`아이디`}</Typography>
          </Box>
          <Box sx={{ m: 0, p: 1, width: 230, borderLeft: 1 }}>
            <Typography noWrap>{`비밀번호`}</Typography>
          </Box>
          <Box sx={{ m: 0, p: 1, width: 230, borderLeft: 1 }}>
            <Typography noWrap>{`권역`}</Typography>
          </Box>
        </Stack>
        <Divider sx={{ border: 1 }} />
        <List
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            height: "70vh",
            position: "relative",
            maxHeight: "70vh",
            overflow: "auto",
            m: 0,
            p: 0,
            border: "black",
          }}
        >
          {users.map((value, index) => (
            <Box sx={{ border: "1px black" }}>
              <ListItem key={index} divider={true}>
                <PersonAvatar />
                <Box sx={{ m: 0, p: 1, width: 230 }}>
                  <Typography noWrap>{`${value.user_nm}`}</Typography>
                </Box>
                <Box sx={{ m: 0, p: 1, width: 230 }}>
                  <Typography noWrap>{` ${value.user_id}`}</Typography>
                </Box>
                <Box sx={{ m: 0, p: 1, width: 230 }}>
                  <Typography noWrap>{` ${value.user_pwd}`}</Typography>
                </Box>
                <Box sx={{ m: 0, p: 1, width: 230 }}>
                  <Typography noWrap>{` ${value.user_local}`}</Typography>
                </Box>
                <Divider orientation="vertical" />
                <IconButton
                  edge="end"
                  aria-label="edit"
                  onClick={() => {
                    handleOpen(value);
                  }}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => {
                    handleDeleteDialogOpen(value);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            </Box>
          ))}
          <AccountDialog
            open={open}
            onClose={handleClose}
            data={selectedUser}
            updateUser={handleClose}
          />
          <DeleteDialog
            open={deleteDialogOpen}
            onClose={handleDeleteDialogClose}
            data={selectedUser}
          />
          <CreateDialog
            open={createDialogOpen}
            onClose={handleCreateDialogClose}
          />
        </List>
      </Box>
      <Fab
        sx={{
          position: "absolute",
          bottom: 100,
          right: 100,
        }}
        color={"primary"}
        onClick={() => handleCreateDialogOpen()}
      >
        <AddIcon />
      </Fab>
    </Box>
  );
};

export default AccountManagePage;
