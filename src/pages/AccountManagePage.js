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
import Stack from '@mui/material/Stack';
import { SliderValueLabel } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: "70vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AccountManagePage = () => {
  const [nameUpdating, setNameUpdating] = useState("");
  const userNameRef = useRef("");
  const userIdRef = useRef("");
  const userPwdRef = useRef("");
  const userLocalRef = useRef("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const updateUser = () => {
    console.log(userNameRef.current.value, userIdRef.current.value, userPwdRef.current.value, userLocalRef.current.value);
    handleClose();
    //console.log(nameUpdating);
  }

  const handleUserNameUpdate = (event) => {
    console.log(event.target.value);
    setNameUpdating(event.target.value);
  }

  const [users, setUsers] = useState([]);
  const getUsers = () => {
    axios.get("/user").then((e) => {
      setUsers(e.data.data);
      console.log(e.data.data);
    });
  };
  useEffect(() => {
    getUsers();
    
  }, []);
  return (
    <Box style={{ height: "70vh" }}>
      <Box sx={{ border: 1, borderColor: "black" }}>
        <Stack direction="row" sx={{m:1}}>
              <PersonAvatar sx={{m:1}} />
              <Box sx={{ m: 0, p: 1, width: 230, borderLeft: 1}}>
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
          <Divider sx={{border:1}}/>
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
                <ListItem
                  key={index}
                  divider={true}
                  secondaryAction={
                    <>
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={handleOpen}
                      >
                        <EditIcon />
                      </IconButton>
                      <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>사용자 정보 수정</DialogTitle>
                        <DialogContent>
                          <DialogContentText>
                            정보 수정 하세요.
                          </DialogContentText>
                          <TextField
                            required
                            autoFocus
                            margin="normal"
                            id="user_nm"
                            label="이름"
                            type="string"
                            fullWidth
                            defaultValue={value.user_nm}
                            inputRef={userNameRef}
                          />
                          <TextField
                            required
                            autoFocus
                            margin="normal"
                            id="user_id"
                            label="아이디"
                            type="string"
                            fullWidth
                            defaultValue={value.user_id}
                            inputRef={userIdRef}
                          />
                          <TextField
                            required
                            autoFocus
                            margin="normal"
                            id="user_pwd"
                            label="비밀번호"
                            type="string"
                            fullWidth
                            defaultValue={value.user_pwd}
                            inputRef={userPwdRef}
                          />
                          <TextField
                            required
                            autoFocus
                            margin="normal"
                            id="user_nm"
                            label="권역"
                            type="string"
                            fullWidth
                            defaultValue={value.user_local}
                            inputRef={userLocalRef}
                          />
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleClose}>Cancel</Button>
                          <Button onClick={updateUser}>Submit</Button>
                        </DialogActions>
                      </Dialog>
                      <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    </>
                  }
                >
                  <PersonAvatar />
                  <Box sx={{ m: 0, p: 1, width: 230}}>
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
                </ListItem>
              </Box>
            ))}
          </List>
        </Box>
      </Box>
  );
};

export default AccountManagePage;
