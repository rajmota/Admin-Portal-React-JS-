import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TimelineIcon from '@mui/icons-material/Timeline';
import React from 'react';

const Widget = ({type}) => {
  let data;

  switch (type) {
    case "students":
      data = {
        title: "STUDENTS",
        counter:"230",
        link: "See all students",
        percentage: "27%",
        icon: (
          <KeyboardArrowUpIcon/>,
          <PersonOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "mostLovedCourses":
      data = {
        title: "MOST LOVED COURSES",
        counter:"25",
        link: "View all Courses",
        percentage: "6%",
        icon: (
          <KeyboardArrowUpIcon/>,
          <FavoriteIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
            
          />
        ),
      };
      break;
    case "reports":
      data = {
        title: "REPORTS",
        counter:"13",
        link: "View Reports",
        percentage: "",
        icon: (
          <TimelineIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "newCourses":
      data = {
        title: "NEW COURSES",
        counter:"7",
        link: "View new available Courses",
        percentage: "",
        icon: (
          <CreateNewFolderIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <div className="title">{data.title}</div>
        <div className="counter">{data.counter}</div>
        <div className="link">{data.link}</div>
      </div>
      <div className="right">
        <div className="percentage">
          {data.percentage !== "" ? <KeyboardArrowUpIcon/> : ""}
          {data.percentage !== "" ? data.percentage : ""}
        </div>
        
        {data.icon}
      </div>
    </div>

  )
}

export default Widget