import "./table.scss"
import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const List = () => {

    const rows = [
        {
            id: 20349,
            img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
            studentName: "Raj Mota",
            dateOfJoin: "1st March",
            elective: "Image Video Analysis",
            status: "Approved",
        },
        {
            id: 20332,
            img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
            studentName: "Lakshana K",
            dateOfJoin: "2nd January",
            elective: "Business Analytics",
            status: "Pending",
        },
        {
            id: 20365,
            img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
            studentName: "Tarun Rajkumar",
            dateOfJoin: "27th April",
            elective: "Cyber Physical Systems",
            status: "Approved",
        },
        {
            id: 20366,
            img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
            studentName: "Tejesh Kumar S",
            dateOfJoin: "1 March",
            elective: "Image Video Analysis",
            status: "Approved",
        },
        {
            id: 20355,
            img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
            studentName: "Sanjith Raghav S",
            dateOfJoin: "1 March",
            elective: "IOT",
            status: "Approved",
        },
      ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Student ID</TableCell>
            <TableCell className="tableCell">Student Name</TableCell>
            <TableCell className="tableCell">Date Of Joining</TableCell>
            <TableCell className="tableCell">Elective</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">
                {row.id}
              </TableCell>
              <TableCell className="tableCell">
              <div className="cellWrapper">
                <img src={row.img} alt="" className="image" />
                {row.studentName}
              </div>
              </TableCell>
              <TableCell className="tableCell">{row.dateOfJoin}</TableCell>
              <TableCell className="tableCell">{row.elective}</TableCell>
              <TableCell className="tableCell">
              <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List;