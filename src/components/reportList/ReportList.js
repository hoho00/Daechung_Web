import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import { Typography } from "@material-ui/core";

import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import axios from "axios";
import "react-alice-carousel/lib/alice-carousel.css";

const RepoprtList = ({ searchResult, clustererSelection }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedForDialog, setSelectedForDialog] = useState({});
  const [images, setImages] = useState([]);
  const [listUp, setListUp] = useState([]);
  const handleClose = () => {
    setImages([]);
    setOpenDialog(false);
  };
  useEffect(() => {
    const selected = [];
    for (var i = 0; i < clustererSelection.length; i++) {
      for (var j = 0; j < searchResult.length; j++) {
        if (searchResult[j].rp_id === clustererSelection[i]) {
          selected.push(searchResult[j]);
        }
      }
    }
    setListUp(selected);
  }, [clustererSelection]);

  const handleOpen = (report) => {
    setSelectedForDialog(report);
    axios
      .get(`/picture/report/id/${selectedForDialog.rp_id}`)
      .then((e) => {
        if (e.data.image_files) {
          const loaded = e.data.image_files.map((e) => {
            return `data:image/png;base64,${e.file}`;
          });
          setImages(loaded);
        } else {
          setImages([itemData[0]]);
        }
      })
      .then(() => {
        setTimeout(() => {
          setOpenDialog(true);
        }, 500);
      });
  };
  useEffect(() => {
    setListUp(searchResult);
  }, [searchResult]);

  useEffect(() => {
    const f = async () => {
      await axios
        .get(`/picture/report/id/${selectedForDialog.rp_id}`)
        .then((e) => {
          if (e.data.image_files) {
            const loaded = e.data.image_files.map((e) => {
              return `data:image/png;base64,${e.file}`;
            });
            setImages(loaded);
          } else {
            setImages([itemData[0]]);
          }
        });
    };
    f();
  }, [selectedForDialog]);

  return (
    <>
      <Box>
        <List
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            height: "100%",
            position: "relative",
            maxHeight: "70vh",
            overflow: "auto",
            m: 0,
            p: 0,
            border: "black",
          }}
        >
          {listUp.map((value) => (
            <Box sx={{ border: "1px grey" }}>
              <ListItemButton
                key={value.rp_id}
                onClick={() => {
                  handleOpen(value);
                }}
                divider={true}
              >
                <Box sx={{ m: 0, p: 0, width: 230 }}>
                  <Typography noWrap>{`${value.rp_con1.substring(
                    0,
                    10
                  )}...`}</Typography>
                  <ListItemText secondary={`${value.rp_type}`} width="230" />
                </Box>

                <Divider orientation="vertical" />
                <Box>
                  <ListItemText secondary={`${value.rp_date}`} />
                  <ListItemText secondary={`${value.user_nm}`} />
                </Box>
              </ListItemButton>
            </Box>
          ))}
        </List>
      </Box>
      <Dialog open={openDialog} onClose={handleClose} scroll={"paper"}>
        <Box sx={{ width: 500, height: 600 }}>
          <DialogTitle>{selectedForDialog.rp_type}</DialogTitle>
          <Box sx={{ width: "100%", height: 300 }}>
            <img
              src={images[0]}
              className="sliderimg"
              alt="i"
              loading="lazy"
              width="100%"
              height="100%"
            />
          </Box>
          <DialogContent dividers={true}>
            <DialogContentText>
              {`작성자 : ${selectedForDialog.user_nm}`}
            </DialogContentText>
            <DialogContentText>
              {`신고 권역 : ${selectedForDialog.user_local}`}
            </DialogContentText>
            <DialogContentText>
              {`산고 주소 : ${selectedForDialog.rp_add}`}
            </DialogContentText>
            <DialogContentText>
              {`신고 날짜 : ${selectedForDialog.rp_date}`}
            </DialogContentText>
            <DialogContentText>
              {`신고 내용 : ${selectedForDialog.rp_con1}`}
            </DialogContentText>
            <DialogContentText>
              {`조치 내용 : ${selectedForDialog.rp_con2}`}
            </DialogContentText>
          </DialogContent>
        </Box>
      </Dialog>
    </>
  );
};

const itemData = "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e";

export default RepoprtList;
