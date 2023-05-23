import "./sidebar.scss"
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AddIcon from '@mui/icons-material/Add';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import React from 'react';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
const { dispatch } = useContext(DarkModeContext);
  return (
    <div className='sidebar'>
        <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Admin</span>
        </Link>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <Link to="/" style={{ textDecoration: "none" }}>
                <li>
                    <DashboardIcon className="icon" />
                    <span>Dashboard</span>
                </li>
                </Link>
                <p className="title">LISTS</p>
                <Link to="/elective/new" style={{ textDecoration: "none" }}>
                <li>
                    <AddIcon className="icon" />
                    <span>Create Electives</span>
                </li>
                </Link>
                <li>
                    <ManageSearchIcon className="icon" />
                    <span>Elective Management</span>
                </li>
                <Link to="/student" style={{ textDecoration: "none" }}>
                <li>
                    <ManageAccountsIcon className="icon" />
                    <span>Student Management</span>
                </li>
                </Link>
                <p className="title">REPORTS</p>
                <li>
                    <AutoGraphIcon className="icon" />
                    <span>Elective Analytics</span>
                </li>
                <li>
                    <SsidChartIcon className="icon" />
                    <span>Student Analytics</span>
                </li>
                <p className="title">SYSTEM</p>
                <li>
                    <SystemUpdateAltIcon className="icon" />
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsApplicationsIcon className="icon" />
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <NotificationsNoneIcon className="icon" />
                    <span>Notifications</span>
                </li>
                <li>
                    <AccountCircleOutlinedIcon className="icon" />
                    <span>Profile</span>
                </li>
                <li>
                    <ExitToAppIcon className="icon" />
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            {/* <div className="colorOption" onClick={() => dispatch({ type: "LIGHT" })}></div>
            <div className="colorOption" onClick={() => dispatch({ type: "DARK" })}></div> */}
        </div>
    </div>

  )
}

export default Sidebar