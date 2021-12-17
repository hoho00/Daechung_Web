import React from "react";
import { useLocation } from "react-router-dom";
import { copyFileSync } from "fs";
import Box from "@mui/material/Box";

const DownloadImagePage = () => {
  const location = useLocation();
  const urls = location.state.urls;
  console.log(urls);

  return (
    <Box>
      {urls.map((e, index) => (
        <div>
          <a
            className="hidden"
            download={`reportImage${index + 1}.txt`}
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
