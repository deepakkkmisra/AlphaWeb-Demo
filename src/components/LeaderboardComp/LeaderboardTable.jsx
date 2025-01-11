import React, { useState } from "react";
import { useTable } from "react-table";
import "./LeaderboardTable.scss";
import { Pagination } from "@mui/material";

function LeaderboardTable() {
  const data = React.useMemo(
    () => [
      {
        id: 1,
        name: "John",
        profit: 2000,
        equity: 5000,
        account_size: 10000,
        gain: "20%",
        country: "US",
      },
      {
        id: 2,
        name: "Jane",
        profit: 1500,
        equity: 4500,
        account_size: 12000,
        gain: "15%",
        country: "UK",
      },
      {
        id: 3,
        name: "Alice",
        profit: 1800,
        equity: 4700,
        account_size: 13000,
        gain: "18%",
        country: "Canada",
      },
      {
        id: 4,
        name: "Bob",
        profit: 2200,
        equity: 5200,
        account_size: 14000,
        gain: "22%",
        country: "Australia",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      { Header: "#", accessor: "id" },
      { Header: "Name", accessor: "name" },
      { Header: "Profit", accessor: "profit" },
      { Header: "Equity", accessor: "equity" },
      { Header: "Account Size", accessor: "account_size" },
      { Header: "Gain %", accessor: "gain" },
      { Header: "Country", accessor: "country" },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  const [isLeaderboardVisible, setLeaderboardVisible] = useState(false);
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  const pageCount = Math.ceil(data.length / rowsPerPage);
  const currentPageData = rows.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <div className="leaderboard_table_container">
      <div className="leaderboard_table_wrapper">
        <table {...getTableProps()}>
          <thead className="tableHeaderWrapper">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody
            className={`tableBodyWrapper ${
              isLeaderboardVisible ? "leaderboardVisible" : "leaderboardHidden"
            }`}
            {...getTableBodyProps()}
          >
            {currentPageData.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {pageCount > 1 && (
        <Pagination
          count={pageCount}
          page={page}
          onChange={(e, newPage) => handleChangePage(e, newPage)}
          color="primary"
          className="pagination"
          siblingCount={0}
          boundaryCount={2}
        />
      )}
    </div>
  );
}

export default LeaderboardTable;
