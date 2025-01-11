import React from "react";
import { useTable } from "react-table";
import "./TableComp.scss";

const TableComp = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="table_container">
      <div className="table_wrapper">
        <table {...getTableProps()} className="table">
          <thead className="tableHeaderWrapper">
            {headerGroups.map((headerGroup) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                className="tableHeaderRow"
              >
                {headerGroup.headers.map((column) => (
                  <th className="tableHeader" {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="tableBodyWrapper" {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr className="tableDataRow" {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td className="tableData" {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComp;
