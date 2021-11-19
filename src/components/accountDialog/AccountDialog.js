import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";

const AccountDialog = ({ open, onClose, updateUser, data, key }) => {
  const [user, setUser] = useState([]);
  const [updateUserInfo, setUpdateUserInfo] = useState({
    user_seq: -1,
    user_id: "",
    user_pwd: "",
    user_local: "",
    user_nm: "",
  });
  useEffect(() => {
    setUser(data);
    setUpdateUserInfo(data);
  }, []);
  useEffect(() => {
    setUser(data);
    setUpdateUserInfo(data);
  }, [data]);
  const updateUserFromDialog = (userInfo) => {
    console.log("updating : ", userInfo);

    axios
      .post("/user/update", userInfo, {
        headers: {
          "content-type": "text/plain",
        },
      })
      .then((e) => {
        alert("회원 정보가 변경 되었습니다. ");
        window.location.replace("/home/account_manage");
      });
  };
  return (
    <Dialog open={open} onClose={onClose} key={key}>
      <DialogTitle>사용자 정보 수정</DialogTitle>
      <DialogContent>
        <DialogContentText>정보 수정 하세요.</DialogContentText>
        <TextField
          required
          autoFocus
          margin="normal"
          id="user_nm"
          label="이름"
          type="string"
          fullWidth
          defaultValue={user.user_nm}
          onChange={(e) =>
            setUpdateUserInfo({
              ...updateUserInfo,
              user_nm: e.target.value,
            })
          }
        />
        <TextField
          required
          autoFocus
          margin="normal"
          id="user_id"
          label="아이디"
          type="string"
          fullWidth
          defaultValue={user.user_id}
          onChange={(e) =>
            setUpdateUserInfo({
              ...updateUserInfo,
              user_id: e.target.value,
            })
          }
        />
        <TextField
          required
          autoFocus
          margin="normal"
          id="user_pwd"
          label="비밀번호"
          type="string"
          fullWidth
          defaultValue={user.user_pwd}
          onChange={(e) =>
            setUpdateUserInfo({
              ...updateUserInfo,
              user_pwd: e.target.value,
            })
          }
        />
        <TextField
          required
          autoFocus
          margin="normal"
          id="user_nm"
          label="권역"
          type="string"
          fullWidth
          defaultValue={user.user_local}
          onChange={(e) =>
            setUpdateUserInfo({
              ...updateUserInfo,
              user_local: e.target.value,
            })
          }
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          color="success"
          onClick={() => {
            updateUserFromDialog(updateUserInfo);
            updateUser();
          }}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AccountDialog;
