import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { getDefaultState } from "../common/functions/getDefaultState";

const columns = [
  { field: "rp_date", headerName: "일시", width: 130 },
  { field: "user_nm", headerName: "신고자", width: 130 },
  
  { field: "user_local", headerName: "권역", width: 130 },
  { field: "rp_type", headerName: "신고 항목", width: 130 },
  { field: "rp_con1", headerName: "신고 내용", width: 200 },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const DataOrganizePage = () => {
  const [reports, setReports] = useState([]);
  const getReports = async () => {
    await axios
      .post("/report/search", {
          search_type: "전체",
          search_start_date: "2000/01/01",
          search_end_date: "3000/01/01",
          search_local: "전체",
      }, 
      {
        headers: {
          "content-type": "text/plain",
        },
      })
      .then((e) => {
        console.log("data", e.data.data);
        setReports(e.data.data);
      });
  };
  useEffect(() => {
    const func = async () => {
      await getReports();
    };
    func();
    console.log("table",reports);
  }, []);

  return (
    <div>
      <div style={{ height: 400, width: "100%" }}>
        {/* {reports && <DataGrid
          rows={reports}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />} */}
      </div>
    </div>
  );
};

export default DataOrganizePage;
