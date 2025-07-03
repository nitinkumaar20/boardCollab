import React, { useState } from "react";
import Board from "./components/Board";
import AddBoard from "./components/Addboard";
import Task from "./components/Task";
const Layout = () => {
  const [leftOpen, setLeftOpen] = useState(false);
  const [component, setComponent] = useState('');
const renderComponents = () => {
  return (
    <>
      {component === 'board' && <Board />}
      {component === 'addBoard' && <AddBoard />}
      {component === 'tasks' && <Task />}
    </>
  );
};
  return (
    <div className="layout">
      <div className={leftOpen ? "sidebar sidebar-collapsed" : "sidebar"}>
        <p onClick={()=>{setComponent('board')}}>Board</p>
        <p onClick={()=>{setComponent('addBoard')}}>Add Board</p>
        <p onClick={()=>{setComponent('tasks')}}>Task in Board</p>
      </div>
      <div className="main">
        <div className="main-header">
          <div className="toggle-button">
            <svg
              className="menu-icon"
              onClick={() => setLeftOpen(!leftOpen)}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.464 20.536C4.929 22 7.286 22 12 22s7.071-0.001 8.536-1.464C22 19.071 22 16.714 22 12S22 4.929 20.536 3.464C19.071 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.929 2 7.286 2 12s0 7.071 1.464 8.536ZM18 16.75H6a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 0 1.5ZM6 12.75h12a.75.75 0 0 0 0-1.5H6a.75.75 0 0 0 0 1.5ZM6 8.75h12a.75.75 0 0 0 0-1.5H6a.75.75 0 0 0 0 1.5Z"
                fill="#1C274C"
              />
            </svg>
          </div>
          <div className="search-container">
            <input type="text" className="search-input" placeholder="Search..." />
          </div>
        </div>
        <div className="main-content">
          {/* <h2>Welcome to Admin Panel</h2> */}
          {/* You can add routes or nested content here */}
          {renderComponents()}
        </div>
      </div>
    </div>
  );
};

export default Layout;
