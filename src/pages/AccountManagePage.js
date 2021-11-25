import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import axios from "axios";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import { Typography } from "@material-ui/core";
import PersonAvatar from "@mui/icons-material/Person";
import Stack from "@mui/material/Stack";
import AccountDialog from "../components/accountDialog/AccountDialog";
import DeleteDialog from "../components/deleteDialog/DeleteDialog";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import CreateDialog from "../components/createDialog/CreateDialog";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const AccountManagePage = () => {
  const [open, setOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const handleOpen = (user) => {
    setSelectedUser(user);
    setOpen(true);
  };
  const handleDeleteDialogOpen = (user) => {
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
  const getUsers = async () => {
    await axios.get("/user").then((e) => {
      setUsers(e.data.data);
    });
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <Box style={{ height: "70vh" }}>
      <Box sx={{ border: 1, borderColor: "black" }}>
        <Grid container spacing={1}>
          <Grid item xs={0.5}>
            <PersonAvatar sx={{ m: 1 }} />
          </Grid>
          <Grid item xs={1}>
            <Box sx={{ m: 0, p: 1, borderLeft: 1 }}>
              <Typography noWrap>{`이름`}</Typography>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box sx={{ m: 0, p: 1, borderLeft: 1 }}>
              <Typography noWrap>{`아이디`}</Typography>
            </Box>
          </Grid>
          {/* <Grid item xs={2}>
            <Box sx={{ m: 0, p: 1, borderLeft: 1 }}>
              <Typography noWrap>{`비밀번호`}</Typography>
            </Box>
          </Grid> */}
          <Grid item xs={1}>
            <Box sx={{ m: 0, p: 1, borderLeft: 1 }}>
              <Typography noWrap>{`권역`}</Typography>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box sx={{ m: 0, p: 1, borderLeft: 1 }}>
              <Typography noWrap>{`최근접속시간`}</Typography>
            </Box>
          </Grid>
          <Grid item xs={1}>
            <Box sx={{ m: 0, p: 1, borderLeft: 1 }}>
              <Typography noWrap>{`인증코드`}</Typography>
            </Box>
          </Grid>
        </Grid>
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
                <Grid container spacing={0.5}>
                  <Grid item xs={0.5}>
                    <PersonAvatar />
                  </Grid>

                  <Grid item xs={1}>
                    <Box sx={{ m: 0, p: 1, paddingRight: 0 }}>
                      <Typography noWrap>{`${value.user_nm}`}</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={2}>
                    <Box sx={{ m: 0, p: 1 }}>
                      <Typography noWrap>{` ${value.user_id}`}</Typography>
                    </Box>
                  </Grid>
                  {/* <Grid item xs={2}>
                    <Box sx={{ m: 0, p: 1 }}>
                      <Typography noWrap>{` ${value.user_pwd}`}</Typography>
                    </Box>
                  </Grid> */}
                  <Grid item xs={1}>
                    <Box sx={{ m: 0, p: 1 }}>
                      <Typography noWrap>{` ${value.user_local}`}</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={2}>
                    <Box sx={{ m: 0, p: 1 }}>
                      <Typography noWrap>{` ${value.latest}`}</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={1}>
                    <Box sx={{ m: 0, p: 1 }}>
                      <Typography noWrap>{` ${value.auth_code}`}</Typography>
                    </Box>
                  </Grid>

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
                </Grid>
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
