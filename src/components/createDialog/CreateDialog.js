import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";
import React from "react";

const CreateDialog = ({ open, onClose }) => {
  const [createUserInfo, setCreateUserInfo] = useState({
    user_id: "",
    user_pwd: "",
    user_local: "",
    user_nm: "",
  });
  const register = async () => {
    await axios
      .post(
        "/user/register",
        {
          user_id: createUserInfo.user_id,
          user_pwd: createUserInfo.user_pwd,
          user_nm: createUserInfo.user_nm,
          user_local: createUserInfo.user_local,
        },
        {
          headers: {
            "content-type": "text/plain",
          },
        }
      )
      .then((e) => {
        alert("새로운 회원이 생성 되었습니다.");
        window.location.replace("/home/account_manage");
        setCreateUserInfo({
          user_id: "",
          user_pwd: "",
          user_local: "",
          user_nm: "",
        });
      });
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>사용자 생성</DialogTitle>
      <DialogContent>
        <DialogContentText>생성 할 사용자 정보를 입력하세요.</DialogContentText>
        <TextField
          required
          autoFocus
          //error={}
          margin="normal"
          id="user_nm"
          label="이름"
          type="string"
          fullWidth
          // defaultValue={user.user_nm}
          onChange={(e) =>
            setCreateUserInfo({
              ...createUserInfo,
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
          //defaultValue={user.user_id}
          onChange={(e) =>
            setCreateUserInfo({
              ...createUserInfo,
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
          //defaultValue={user.user_pwd}
          onChange={(e) =>
            setCreateUserInfo({
              ...createUserInfo,
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
          //defaultValue={user.user_local}
          onChange={(e) =>
            setCreateUserInfo({
              ...createUserInfo,
              user_local: e.target.value,
            })
          }
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            onClose();
            setCreateUserInfo({
              user_id: "",
              user_pwd: "",
              user_local: "",
              user_nm: "",
            });
          }}
        >
          Cancel
        </Button>
        <Button
          color="success"
          onClick={() => {
            console.log(createUserInfo);
            register();
          }}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateDialog;
