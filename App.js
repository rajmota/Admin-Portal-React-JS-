import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,   
} from "react-router-dom";

import "./style/dark.scss"
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";


import { electiveInputs, studentInputs } from "./formSource";

function App() {
  const { darkMode } = useContext(DarkModeContext);
    return ( 
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
            <Route path="/"></Route>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="student">
              <Route index element={<List />} />
              <Route path=":studentId" element={<Single />} />
              <Route path="new" element={<New inputs = {studentInputs} title = "Add New Student"/>}/>
            </Route>
            <Route path="elective">
              <Route index element={<List />} />
              <Route path=":electiveId" element={<Single />} />
              <Route path="new" element={<New inputs = {electiveInputs} title = "Create New Elective"/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
    );
}

export default App;