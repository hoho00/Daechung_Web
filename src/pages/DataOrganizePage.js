import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import {
  useTable,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
  usePagination,
} from "react-table";
import Box from "@mui/material/Box";

import { matchSorter } from "match-sorter";

import Button from "@mui/material/Button";
import ReactExport from "react-data-export";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const Styles = styled.div`
  // padding: 1rem;
  height: 100%;
  table {
    border-spacing: 0;
    border: 1px solid grey;
    height: 100%;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid grey;
      border-right: 1px solid grey;

      :last-child {
        border-right: 0;
      }
    }
  }

  .pagination {
    padding: 0.5rem;
  }
`;

function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <span>
      전체 내용 검색:{" "}
      <input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
        style={{
          fontSize: "1.1rem",
          border: "0",
        }}
      />
    </span>
  );
}

const SelectColumnFilter = ({
  column: { filterValue, setFilter, preFilteredRows, id },
}) => {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row) => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);

  // Render a multi-select box
  return (
    <select
      value={filterValue}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
    >
      <option value="">All</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

// Define a default UI for filtering
function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length;

  return (
    <input
      value={filterValue || ""}
      onChange={(e) => {
        setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
      }}
      placeholder={`Search ${count} records...`}
    />
  );
}
function fuzzyTextFilterFn(rows, id, filterValue) {
  return matchSorter(rows, filterValue, { keys: [(row) => row.values[id]] });
}

// Let the table remove the filter if the string is empty
fuzzyTextFilterFn.autoRemove = (val) => !val;

function Table({ columns, data, download }) {
  const filterTypes = React.useMemo(
    () => ({
      // Add a new fuzzyTextFilterFn filter type.
      fuzzyText: fuzzyTextFilterFn,
      // Or, override the default text filter to use
      // "startWith"
      text: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    }),
    []
  );

  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      defaultColumn, // Be sure to pass the defaultColumn option
      filterTypes,
      initialState: { pageIndex: 0 },
    },
    useFilters, // useFilters!
    useGlobalFilter, // useGlobalFilter!
    usePagination
  );

  // We don't want to render all of the rows for this example, so cap
  // it for this use case
  const firstPageRows = rows;
  download(rows);

  return (
    <>
      <table {...getTableProps()} width={"100%"} height={"100%"}>
        <thead>
          <tr>
            <th
              colSpan={visibleColumns.length}
              style={{
                textAlign: "right",
              }}
            >
              <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
              />
            </th>
          </tr>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render("Header")}
                  {/* Render the columns filter UI */}
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
      </div>
      {/* <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select> */}
    </>
  );
}

const DataOrganizePage = () => {
  const [reports, setReports] = useState([]);
  const [downloadRows, setDownloadRows] = useState([]);
  const [downloadFileData, setDownloadFileData] = useState([]);
  const setterData = () => {
    const f = downloadRows.map((e) => {
      return e.original;
    });
    setDownloadFileData(f);
  };

  const getReports = () => {
    axios
      .post(
        "/report/search",
        {
          search_type: "전체",
          search_start_date: "2000/01/01",
          search_end_date: "3000/01/01",
          search_local: "전체",
        },
        {
          headers: {
            "content-type": "text/plain",
          },
        }
      )
      .then((e) => {
        setReports(e.data.data);
      });
  };
  useEffect(() => {
    getReports();
  }, []);

  useEffect(() => {
    setterData();
  }, [downloadRows]);

  const columns = React.useMemo(
    () => [
      {
        Header: "일시",
        accessor: "rp_date",
        Filter: SelectColumnFilter,
        filter: "includes",
      },
      {
        Header: "신고자",
        accessor: "user_nm",
        Filter: SelectColumnFilter,
        filter: "includes",
      },
      {
        Header: "권역",
        accessor: "user_local",
        Filter: SelectColumnFilter,
        filter: "includes",
      },
      {
        Header: "신고 장소",
        accessor: "rp_add",
      },
      {
        Header: "신고항목",
        accessor: "rp_type",
        Filter: SelectColumnFilter,
        filter: "includes",
      },
      {
        Header: "신고내용",
        accessor: "rp_con1",
      },
    ],
    []
  );

  return (
    <Box sx={{ height: "70vh" }}>
      <Styles>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Box sx={{ justifyContent: "flex-end", p: 2 }}>
            <ExcelFile>
              <ExcelSheet
                data={downloadFileData}
                name="reports"
                element={<Button variant="contained">다운로드</Button>}
              >
                <ExcelColumn label="일시" value="rp_date" />
                <ExcelColumn label="신고자" value="user_nm" />
                <ExcelColumn label="권역" value="user_local" />
                <ExcelColumn label="권역" value="rp_add" />
                <ExcelColumn label="신고 항목" value="rp_type" />
                <ExcelColumn label="신고 내용" value="rp_con1" />
              </ExcelSheet>
            </ExcelFile>
          </Box>
        </Box>
        <Table columns={columns} data={reports} download={setDownloadRows} />
      </Styles>
    </Box>
  );
};
export default DataOrganizePage;
