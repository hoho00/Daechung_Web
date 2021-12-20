import React from "react";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";

const DownloadImagePage = () => {
  const location = useLocation();
  const urls = location.state.urls;
  const title = location.state.title;
  console.log(urls);

  return (
    <Box>
      {urls.map((e, index) => (
        <div>
          <a
            className="hidden"
            download={`${title}(${index + 1}).txt`}
            href={e}
          >
            {`사진${index + 1}`}
          </a>
          <br />
        </div>
      ))}
    </Box>
  );
};

export default DownloadImagePage;
