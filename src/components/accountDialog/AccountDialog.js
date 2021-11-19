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
import { Box } from "@mui/system";

const AccountDialog = ({ open, onClose, updateUser, data, key }) => {
  const [checkDuplicate, setCheckDuplicate] = useState(false);
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
  const checkDuplicateId = () => {};
  const updateUserFromDialog = async (userInfo) => {
    console.log("updating : ", userInfo);
    //console.log()
    const current_id = await axios.get(`/user/info/seq/${userInfo.user_seq}`);
    const exist = await axios.get(`/user/check/id/${userInfo.user_id}`);
    console.log("checking : ", current_id.data.data.user_id, exist.data.exist);
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
        <Box>
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
        </Box>

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
        {checkDuplicate ? (
          <Button variant="text">중복확인완료</Button>
        ) : (
          <Button
            variant="text"
            color="error"
            onClick={() => {
              setCheckDuplicate(true);
            }}
          >
            아이디 중복확인
          </Button>
        )}

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
