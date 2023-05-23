import React from 'react';
import { CircularProgressbar } from "react-circular-progressbar";
import "./featured.scss"
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featured">
     <div className="top">
        <h1 className="title">Total Students</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={8}/>
        </div>
        <p className="title">Total Students Joined Today</p>
        <p className="amount">3</p>
        <p className="desc">Currently included students may not be added. Previous transactions processing.</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target
            <div className="itemResult">
              <div className="resultAmount">30</div>
            </div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week
            <div className="itemResult positive">
            < KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">7</div>
            </div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month
            <div className="itemResult negative">
            < KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">25</div>
            </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Featured