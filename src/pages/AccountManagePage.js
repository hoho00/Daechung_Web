import React, { useEffect, useState } from "react";
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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AccountManagePage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    <Box>
      <Box sx={{ border: 1 }}>
        <h1>사용자 계정 목록</h1>
        <Box>
          <List
            sx={{
              width: 976,
              bgcolor: "background.paper",
              height: 771,
              position: "relative",
              maxHeight: 771,
              overflow: "auto",
              m: 0,
              p: 0,
              border: "black",
            }}
          >
            {users.map((value) => (
              <Box sx={{ border: "1px grey" }}>
                <ListItem
                  key={value.rp_id}
                  //onClick={() => console.log("hi")}
                  divider={true}
                  secondaryAction={
                    <>
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={handleOpen}
                      >
                        <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <Box sx={style}>
                            <Typography
                              id="modal-modal-title"
                              variant="h6"
                              component="h2"
                            >
                              Text in a modal
                            </Typography>
                            <Typography
                              id="modal-modal-description"
                              sx={{ mt: 2 }}
                            >
                              Duis mollis, est non commodo luctus, nisi erat
                              porttitor ligula.
                            </Typography>
                          </Box>
                        </Modal>
                        <EditIcon />
                      </IconButton>
                      <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    </>
                  }
                >
                  <Box sx={{ m: 0, p: 0, width: 230 }}>
                    <Typography noWrap>{`${value.user_nm}`}</Typography>
                    <ListItemText
                      //primary={`신고내용 ${value.rp_con1}`}
                      secondary={`${value.user_id}`}
                      width="230"
                    />
                  </Box>

                  <Divider orientation="vertical" />
                  <Box>
                    <ListItemText secondary={`${value.user_pwd}`} />
                    <ListItemText secondary={`${value.user_nm}`} />
                  </Box>
                </ListItem>
              </Box>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default AccountManagePage;
