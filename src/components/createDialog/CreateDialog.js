import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import sha256 from "sha256";

const CreateDialog = ({ open, onClose }) => {
  const [checkDuplicate, setCheckDuplicate] = useState(false);
  const [createUserInfo, setCreateUserInfo] = useState({
    user_id: "",
    user_pwd: "",
    user_local: "",
    user_nm: "",
  });
  const checkDuplicateId = async (checking) => {
    const s = await axios.get(
      process.env.REACT_API_HOST +
        `
      /user/check/id/${checking}
      `
    );
    if (s.data.exist) {
      alert("중복된 아이디 입니다. 다른 아이디를 사용해 주세요.");
    } else {
      alert("중복체크 완료, 사용가능한 아이디 입니다.");
    }
    setCheckDuplicate(!s.data.exist);
    return s.data.exist;
  };
  useEffect(() => {
    setCheckDuplicate(false);
  }, []);
  useEffect(() => {
    setCheckDuplicate(false);
  }, [open]);
  const register = async () => {
    if (!checkDuplicate) {
      alert("아이디 중복 체크를 해 주세요.");
    } else {
      await axios
        .post(
          process.env.REACT_API_HOST + "/user/register",
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
    }
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
          type="password"
          fullWidth
          //defaultValue={user.user_pwd}
          onChange={(e) =>
            setCreateUserInfo({
              ...createUserInfo,
              user_pwd: sha256(e.target.value),
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
        {checkDuplicate ? (
          <Button variant="text">중복확인완료</Button>
        ) : (
          <Button
            variant="text"
            color="error"
            onClick={async () => {
              await checkDuplicateId(createUserInfo.user_id);
              //setCheckDuplicate(true);
            }}
          >
            아이디 중복확인
          </Button>
        )}
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
