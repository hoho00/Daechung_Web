import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";

const DeleteDialog = ({ open, onClose, updateUser, data, key }) => {
  const [deleteUserInfo, setDeleteUserInfo] = useState({
    user_seq: -1,
    user_id: "",
    user_pwd: "",
    user_local: "",
    user_nm: "",
  });

  useEffect(() => {
    setDeleteUserInfo(data);
  }, []);
  useEffect(() => {
    setDeleteUserInfo(data);
  }, [data]);

  const deleteUser = (userInfo) => {
    axios
      .post(
        "http://database:8000/user/delete",
        {
          user_seq: userInfo.user_seq,
        },
        {
          headers: {
            "content-type": "text/plain",
          },
        }
      )
      .then((e) => {
        alert("회원정보가 삭제 되었습니다.");
        window.location.replace("/home/account_manage");
      });
  };
  return (
    <Dialog open={open} onClose={onClose} key={key}>
      <DialogTitle id="alert-dialog-title">
        {`${data.user_nm}님의 회원정보를 삭제 하시겠습니까?`}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description" color="red">
          {`삭제한 정보는 다시 복구 할 수 없습니다.`}
        </DialogContentText>
        <DialogContentText id="alert-dialog-description">
          {`이름 : ${data.user_nm}, 아이디 : ${data.user_id}, 권역 : ${data.user_local}`}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>cancel</Button>
        <Button
          onClick={onClose}
          color="error"
          onClick={() => {
            deleteUser(deleteUserInfo);
          }}
        >
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
