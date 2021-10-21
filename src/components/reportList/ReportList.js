import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import List from "@mui/material/List";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import { FixedSizeList } from "react-window";
import { makeStyles, Paper, Typography } from "@material-ui/core";
import { margin, maxHeight } from "@mui/system";
import { ClassNames } from "@emotion/react";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import axios from "axios";
import SimpleImageSlider from "react-simple-image-slider";

const renderRow = (props) => {
  const { index, style, s } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        {s && <ListItemText primary={`Item ${s[index]}`} />}
      </ListItemButton>
    </ListItem>
  );
};

const RepoprtList = ({ searchResult }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedForDialog, setSelectedForDialog] = useState({});
  const [images, setImages] = useState([]);
  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleOpen = (report) => {
    console.log("dialog report : ", report);
    setSelectedForDialog(report);
    axios
      .get(`/picture/report/id/${selectedForDialog.rp_id}`)
      .then((e) => {
        //console.log(e.data.image_files);
        if (e.data.image_files) {
          const loaded = e.data.image_files.map((e) => {
            return { url: `data:image/png;base64,${e.file}` };
          });
          setImages(loaded);
        } else {
          setImages([itemData[0]]);
        }
      })
      .then(() => setOpenDialog(true));
  };
  useEffect(() => {
    console.log("lists : ", searchResult);
  }, [searchResult]);

  useEffect(() => {
    const f = async () => {
      await axios
        .get(`/picture/report/id/${selectedForDialog.rp_id}`)
        .then((e) => {
          //console.log(e.data.image_files);
          if (e.data.image_files) {
            const loaded = e.data.image_files.map((e) => {
              return { url: `data:image/png;base64,${e.file}` };
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
          {searchResult.map((value) => (
            <Box sx={{ border: "1px grey" }}>
              <ListItemButton
                key={value.rp_id}
                onClick={() => {
                  handleOpen(value);
                  console.log("hi", value.rp_id);
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
            <SimpleImageSlider width={500} height={300} images={images} />
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

const itemData = [
  {
    url: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    url: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    url: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    url: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    url: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    url: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    url: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
];

export default RepoprtList;
